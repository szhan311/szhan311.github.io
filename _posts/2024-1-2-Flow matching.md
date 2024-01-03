---
layout: post
title:  Flow matching for generative modeling
date: 2024-1-2 18:07:00
description: 
tags: Literature-review
categories: Optimal-transport
tikzjax: true
---
# Design Philosophy
- Given vector field / SDE / ODE: DDPM, Score-based SDE

- Given flow: Elucidating the design space

- Given density path: flow matching, action matching, interplorating between any two distributions

- Given density path, there's infinity flow / process satisfy this density path

- The link between density path and dynamic: continuty equation

- The path with the lowest shipping cost: optimal transport

- Is the optimal transport path the best?

# Introduction

- **Question behind**: Given probility path, can we find a related dynamic?

- Flow Matching (FM), a **simulation-free** approach for training CNFs based on** regressing vector ﬁelds** of ﬁxed conditional probability paths.

- we ﬁnd that employing FM with diffusion paths results in a **more robust and stable** alternative for training diffusion models.

- Flow Matching opens the door to training CNFs with other, non-diffusion probability paths.

   - An instance is using Optimal Transport (OT) displacement interpolation.

- propose the **Flow Matching objective**

- ﬁnd that conditional **OT paths are simpler** than diffusion paths, forming straight line trajectories whereas diffusion paths result in curved paths.


# Preliminaries

## Continuity Equation (transport equation)

Describe how the density evolves

- State space to density space (Continuous dynamic to continuous equation)

- Can we know** if a vector field **$$v_t$$** is generates a probability path **$$p_t$$? The anwser is the continuity equation. 

- It is a Partial Differential Equation (PDE) providing a necessary and sufﬁcient condition to ensuring that a vector ﬁeld $$v_t$$ generates $$p_t$$,

- $$\frac{d}{d t} p_t(x)+\operatorname{div}\left(p_t(x) v_t(x)\right)=0$$

- where the divergence operator, div, is defined respect to the special variable $$x = (x^1, \cdots, x^d)$$, ie., $$\text{div} = \sum_{i=1}^d\frac{\partial}{\partial x^i}$$

## Two important objects

- **The probability path**: $$p:[0,1] \times \mathbb{R}^d \rightarrow \mathbb{R}_{>0}$$

- **Time-dependent vector ﬁeld**: $$\phi:[0,1] \times \mathbb{R}^d \rightarrow \mathbb{R}^d$$

   - the vector field is defined via the ODE

   - $$\begin{aligned} \frac{d}{d t} \phi_t(x) & =v_t\left(\phi_t(x)\right) \\ \phi_0(x) & =x\end{aligned}$$

# Flow matching

## Initial Flow Matching Objective

- **Data distribution:** let $$x_1$$ denote a random variable distributed according to some **unknown data distribution** $$q(x_1)$$

   - e.g. $$x_1$$ is the cat, then $$q(x_1)$$ is the distribution of cats

- **Prior:** $$p_0 = p$$ is a simple distribution, e.g., the standard normal distribution $$p(x) = \mathcal{N} (x \vert 0, I)$$

- **Probability path**: $$p_t(x), t \in [0, 1]$$, we hope $$p_1 \approx p_0$$

- **Flow Matching Objective**: Given a target distribution $$p_t(x)$$ and a corresponding vector field $$u_t(x)$$, which generates $$p_t(x)$$, we define the Flow matching objective as

   - $$\mathcal{L}_{\mathrm{FM}}(\theta)=\mathbb{E}_{t \sim \mathcal{U}[0,1], x \sim p_t(x)}\left\|v_t(x, \theta)-u_t(x)\right\|^2$$

- **This objective is intractable**: since we have no prior knowledge for $$p_t$$and $$u_t$$

   - we have many choices of $$p_t(x)$$ that satisfy $$p_1(x) \approx q(x)$$

   - we generally don’t have access to a closed form $$u_t$$ that generate desired $$p_t$$

## Constructing $$p_t, u_t$$ from conditional probability paths and vector fields

How to select a target probability path?

- $$p_0(x \vert x_1)$$: Given a particular data sample $$x_1$$, e.g. an image of cat, we denote by $$p_t(x \vert x_1)$$ a _conditional probability path_ such that it satisfies $$p_0(x \vert x_1) = p(x)$$ at time $$t=0$$

- $$p_1(x \vert x_1)$$: we design $$p_1(x \vert x_1)$$ at $$t = 1$$to be a distribution concentrated around $$x = x_1$$, e.g. $$p_1(x \vert x_1) = \mathcal{N}(x \vert x_1, \sigma^2 I)$$, with a small standard deviation $$\sigma > 0$$

- **the marginal probability path**: $$p_t(x)=\int p_t\left(x \mid x_1\right) q\left(x_1\right) d x_1$$

   - $$p_1(x)=\int p_1\left(x \mid x_1\right) q\left(x_1\right) d x_1 \approx q(x)$$

- **the marginal vector ﬁeld** that generates $$p_t( \cdot \vert x_1)$$: $$u_t(x)=\int u_t\left(x \mid x_1\right) \frac{p_t\left(x \mid x_1\right) q\left(x_1\right)}{p_t(x)} d x_1$$

:::info

- **Key observation: the marginal vector ﬁeld generates the marginal probability path**
:::
## Conditional flow matching (CFM)

- we propose a simpler objective, which surprisingly will result in the same optima as the original objective.

   - $$\mathcal{L}_{\mathrm{CFM}}(\theta)=\mathbb{E}_{t \sim \mathcal{U}[0, 1], x_1 \sim q\left(x_1\right), x \sim p_t\left(x \mid x_1\right)}\left\|v_t(x)-u_t\left(x \mid x_1\right)\right\|^2$$

- Why conditional : we can efﬁciently sample from $$p_t(x \vert x_1)$$ and compute $$u_t(x \vert x_1)$$

:::info

- **second key observation: The FM and CFM objectives have identical gradients w.r.t. **$$\theta$$

:::

# Conditional Probability paths and vector fields

## The construction of $$p_t(x \vert x_1)$$ and $$u_t(x \vert x_1)$$

### Design the conditional probability path

- consider conditional probability paths of the form: $$p_t\left(x \mid x_1\right)=\mathcal{N}\left(x \mid \mu_t\left(x_1\right), \sigma_t\left(x_1\right)^2 I\right)$$

- **Set the initial conditional distribution: **we set $$\mu_0 (x_1) = 0$$ and $$\sigma_0(x_1) = 1$$, so at $$t = 0$$, all the conditional probability converge to the same Gaussian noise distribution, $$p(x) = \mathcal{N}(x \vert 0, I)$$

- **Set the final conditional distribution: **we set $$\mu_1(x) = x_1$$, $$\sigma_1(x_1) = \sigma_{\min}$$, which is set sufficiently small so that $$p_1(x \vert x_1)$$ is a concentrated Gaussian distribution centered at $$x_1$$.

### Design the flow

- There is an inﬁnite number of vector ﬁelds that generate any particular probability path.

   - Given a $$p_t(x)$$, there's infinity number of $$u_t(x)$$ satisfy continuty equation

   - e.g., adding a divergence free component to the continuity equation

   - when the distribution is rotation-invariant—**rotational components** leading to unnecessary extra compute

- We select a canonical transformation for Gaussian distributions

   - $$\psi_t(x)=\sigma_t\left(x_1\right) x+\mu_t\left(x_1\right)$$

   - It is easy to prove that this flow satisfy the probability path above: $$p_t\left(x \mid x_1\right)=\mathcal{N}\left(x \mid \mu_t\left(x_1\right), \sigma_t\left(x_1\right)^2 I\right)$$

### Calculate the vector field based on flow

- This ﬂow then provides a vector ﬁeld that generates the conditional probability path: $$u_t\left(\psi_t(x) \mid x_1\right) = \frac{d}{d t} \psi_t(x)$$

- Reparameterizing $$p_t(x \vert x_1)$$ in terms of just $$x_0$$ (since we define the flow, given $$x_0$$, we can sample $$x_t$$), the CFM loss: $$\mathcal{L}_{\mathrm{CFM}}(\theta)=\mathbb{E}_{t, q\left(x_1\right), p\left(x_0\right)}\left\|v_t\left(\psi_t\left(x_0\right)\right)-\frac{d}{d t} \psi_t\left(x_0\right)\right\|^2$$

- the unique vector ﬁeld that deﬁnes $$\psi_t$$: $$u_t\left(x \mid x_1\right)=\frac{\sigma_t^{\prime}\left(x_1\right)}{\sigma_t\left(x_1\right)}\left(x-\mu_t\left(x_1\right)\right)+\mu_t^{\prime}\left(x_1\right)$$. Consequently, $$u_t(x \vert x_1)$$ generates the Gaussian path $$p_t(x \vert x_1)$$
