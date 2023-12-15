---
layout: post
title:  Consistency models
date: 2023-12-10 20:23:00
description: 
tags: Literature-review
categories: Diffusion-models
tikzjax: true
---

# Introduction
Consistency model can be trained in two ways: **distilling pre-trained diffusion models**, **as standalone generative models**

# Preliminaries

## Diffusion models

Let $$p_{\text{data}}(\mathbf{x})$$ denote the data distribution. Diffusion models start by diffusing $$p_{\text{data}}(x)$$ with a stochastic differential equation (SDE) $$\mathrm{d} \mathbf{x}_t=\boldsymbol{\mu}\left(\mathbf{x}_t, t\right) \mathrm{d} t+\sigma(t) \mathrm{d} \mathbf{w}_t$$

where $$t \in [0, T], T > 0$$ is a fixed constant, $$\mu (\cdot, \cdot)$$ and $$\sigma(\cdot)$$ are the drift and diffusion coefficients respectively, and $$\{ \boldsymbol{\omega}_t\}_{t \in [0, T]}$$ denotes the standard Brownian motion.

We denote the distribution of $$\mathbf{x}_t$$ as $$p_{t}(x)$$ and as a result $$p_0(\mathbf{x}) \equiv p_{\text {data }}(\mathbf{x})$$

**the Probability Flow (PF) ODE**: $$\mathrm{d} \mathbf{x}_t=\left[\boldsymbol{\mu}\left(\mathbf{x}_t, t\right)-\frac{1}{2} \sigma(t)^2 \nabla \log p_t\left(\mathbf{x}_t\right)\right] \mathrm{d} t$$

We adopt the setting: $$\boldsymbol{\mu}(\mathbf{x}, t)=\mathbf{0}$$ and $$\sigma(t)=\sqrt{2 t}$$, in this case, $$p_t(\mathbf{x})=p_{\text {data }}(\mathbf{x}) \otimes \mathcal{N}\left(\mathbf{0}, t^2 \boldsymbol{I}\right)$$, where $$\otimes$$ denotes the convolution operation, and $$\pi(\mathbf{x})=\mathcal{N}\left(\mathbf{0}, T^2 \boldsymbol{I}\right)$$

For sampling, we first train a score model $$\boldsymbol{s}_\phi(\mathbf{x}, t) \approx \nabla \log p_t(\mathbf{x})$$ via score matching, then we have the **empirical PF ODE: **$$\frac{\mathrm{d} \mathbf{x}_t}{\mathrm{~d} t}=-t s_\phi\left(\mathbf{x}_t, t\right)$$

To solve this ODE, there are two main ways: **numerical ODE solver **and **distillation techniques**
## EDM Denoiser

#### Equation 2: $$\mathbb{E}_{\boldsymbol{y} \sim p_{\text {data }}} \mathbb{E}_{\boldsymbol{n} \sim \mathcal{N}\left(\mathbf{0}, \sigma^2 \mathbf{I}\right)}\|D(\boldsymbol{y}+\boldsymbol{n} ; \sigma)-\boldsymbol{y}\|_2^2$$
The optimal analytically solution is $$D(\boldsymbol{x} ; \sigma)  =\frac{\sum_i \mathcal{N}\left(\boldsymbol{x} ; \boldsymbol{y}_i, \sigma^2 \mathbf{I}\right) \boldsymbol{y}_i}{\sum_i \mathcal{N}\left(\boldsymbol{x} ; \boldsymbol{y}_i, \sigma^2 \mathbf{I}\right)}$$

{% include figure.html path="assets/img/diffusion models/consistency_01.png" class="img-fluid rounded z-depth-1" %}


Based on Fig. 1, it seems that we cannot get clean image from corrupted image in 1 step.

### Preconditioning and training
In practice, instead of parameterize $$D_{\theta}$$ directly, we train a different network $$F_{\theta}$$ from which $$D_{\theta}$$ is derived

$$D_\theta(\boldsymbol{x} ; \sigma)=c_{\text {skip }}(\sigma) \boldsymbol{x}+c_{\text {out }}(\sigma) F_\theta\left(c_{\text {in }}(\sigma) \boldsymbol{x} ; c_{\text {noise }}(\sigma)\right)$$

The loss is:

$$\mathbb{E}_{\sigma, \boldsymbol{y}, \boldsymbol{n}}[\underbrace{\lambda(\sigma) c_{\text {out }}(\sigma)^2}_{\text {effective weight }}\|\underbrace{F_\theta\left(c_{\text {in }}(\sigma) \cdot(\boldsymbol{y}+\boldsymbol{n}) ; c_{\text {noise }}(\sigma)\right)}_{\text {network output }}-\underbrace{\frac{1}{c_{\text {out }}(\sigma)}\left(\boldsymbol{y}-c_{\text {skip }}(\sigma) \cdot(\boldsymbol{y}+\boldsymbol{n})\right)}_{\text {effective training target }}\|_2^2]$$

# Consistency Model
## What is consistency model

Definition Given a solution trajectory $$\left\{\mathbf{x}_t\right\}_{t \in[\epsilon, T]}$$ of the PF ODE$$\mathrm{d} \mathbf{x}_t=\left[\boldsymbol{\mu}\left(\mathbf{x}_t, t\right)-\frac{1}{2} \sigma(t)^2 \nabla \log p_t\left(\mathbf{x}_t\right)\right] \mathrm{d} t$$, we define the consistency function as $$\boldsymbol{f}:\left(\mathbf{x}_t, t\right) \mapsto \mathbf{x}_\epsilon$$. A consistency function has the property of self-consistency: it outputs are consistent for arbitrary pairs of $$(\mathbf{x}_t, t)$$ that belong to the same PF ODE trajectory, i.e., $$\boldsymbol{f}\left(\mathbf{x}_t, t\right)=\boldsymbol{f}\left(\mathbf{x}_{t^{\prime}}, t^{\prime}\right)$$ for all $$t, t^{\prime} \in[\epsilon, T]$$.


{% include figure.html path="assets/img/diffusion models/consistency_02.png" class="img-fluid rounded z-depth-1" %}

**self-consistency**: points on the same trajectory map to the same initial point.

## parameterization

parameterize the consistency model using skip connections:

$$\boldsymbol{f}_{\boldsymbol{\theta}}(\mathbf{x}, t)=c_{\text {skip }}(t) \mathbf{x}+c_{\text {out }}(t) F_{\boldsymbol{\theta}}(\mathbf{x}, t)$$

where $$c_{\text{skip}}(t)$$ and $$c_{\text{out}}(t)$$ are differeitiable functions such that $$c_{\text{skip}}(\epsilon) = 1$$ and $$c_{\text{out}}(\epsilon) = 0$$

## The consistency ditillation loss

$$\begin{aligned} \mathcal{L}_{C D}^N\left(\boldsymbol{\theta}, \boldsymbol{\theta}^{-} ; \boldsymbol{\phi}\right) & := \\ & \mathbb{E}\left[\lambda\left(t_n\right) d\left(\boldsymbol{f}_{\boldsymbol{\theta}}\left(\mathbf{x}_{t_{n+1}}, t_{n+1}\right), \boldsymbol{f}_{\boldsymbol{\theta}^{-}}\left(\hat{\mathbf{x}}_{t_n}^{\boldsymbol{\phi}}, t_n\right)\right)\right]\end{aligned}$$
