---
layout: post
title:  Action matching
date: 2023-12-11 19:23:00
description: 
tags: Literature-review
categories: Optimal-transport
tikzjax: true
---
Action matching: a method for learning population dynamics from samples of their temporal marginals
The proposed method can learn dynamics which simulate an arbitrary path of marginal distributions, it can also be applied in the context of generative modeling.

# Continuity Equation
any **continuous dynamics** can be modeled by the **continuity equation**, and moreover any **continuity equation** results in a **continuous dynamics**.
## State space to density space

- Suppose we have a set of particles in space $$\mathcal{X} \subset \mathbb{R}^d$$, initially distributed as $$q_{t=0}$$. Let each particle follow a timedependent ODE (continuous flow) with the velocity field $$v:[0,1] \times \mathcal{X} \rightarrow \mathbb{R}^d$$ as follows

   - $$\frac{d}{d t} x(t)=v_t(x(t)), \quad x(t=0)=x$$

   - The continuity equation describes how the density of the particles $$q_t$$ evolves in time $$t$$, i.e.,

   - $$\frac{\partial}{\partial t} q_t=-\nabla \cdot\left(q_t v_t\right)$$

## Density space to state space

- **Theorem 2.1**. Consider a continuous dynamic with the density evolution of $$q_t$$, which satisfies mild conditions (absolute continuty in the 2-Wassertein space of distributions $$\mathcal{P}_2(\mathcal{X})$$. Then there exists a unique (up to a constant) function $$s_t^*(x)$$, called the "action", such that vector field $$v_t^*(x) = \nabla s_t^*(x)$$ and $$q_t$$ satisfies the continuity equation $$\frac{\partial}{\partial t} q_t=-\nabla \cdot\left(q_t \nabla s_t^*(x)\right)$$. 

- In other words, the ODE $$\frac{d}{d t} x(t)=\nabla s_t^*(x)$$ can be used to move samples in time such that the marginals are $$q_t$$.

- Using Theorem 2.1, the problem of learning the dynamics can be boiled down to learning the unique vector field $$\nabla s_t^*$$

- Based on Theorem 2.1, given density dynamic, we can learn a function $$s_t(x, \theta)$$ to approximate $$s_t^*$$. Then Given $$s_t(x, \theta)$$, we can calculate the dynamic in the state space.

# Action matching
## Objective
Recover the true action $$s_t^*$$ while having access only to samples from $$q_t$$.

The objective is to minimize  the "ACTION-GAP" objective $$\operatorname{ACTION-GAP}\left(s, s^*\right):=\frac{1}{2} \int_0^1 \mathbb{E}_{q_t(x)}\left\|\nabla s_t(x)-\nabla s_t^*(x)\right\|^2 d t$$

## Tractable objective
Theorem 2.2. For an arbitrary variational action $$s$$, the ACTION-GAP $$\left(s, s^*\right)$$ can be decomposed as the sum of an intractable constant $$\mathcal{K}$$, and a tractable term $$\mathcal{L}_{A M}(s)$$

$$\operatorname{ACTION-GAP}\left(s_t, s_t^*\right)=\mathcal{K}+\mathcal{L}_{\mathrm{AM}}\left(s_t\right) .$$

where $$\mathcal{L}_{\mathrm{AM}}(s)$$ is the Action Matching objective, which we minimize

$$\begin{aligned}
\mathcal{L}_{\mathrm{AM}}(s) & :=\mathbb{E}_{q_0(x)}\left[s_0(x)\right]-\mathbb{E}_{q_1(x)}\left[s_1(x)\right] \\
& +\int_0^1 \mathbb{E}_{q_t(x)}\left[\frac{1}{2}\left\|\nabla s_t(x)\right\|^2+\frac{\partial s_t}{\partial t}(x)\right] d t
\end{aligned}$$
The term $$\mathcal{L}_{\mathrm{AM}}$$ is tractable

## Connection with Optimal Transport
The optimal dynamics of AM along the curve is also optimal in the sense of optimal transport with the 2-Wasserstein cost.

the optimal vector field in the AM objective defines a mapping between two infinitesimally close distributions $$q_t$$ and $$q_{t+h}$$, which is of the form $$x \mapsto x+h \nabla s_t^*(x)$$. This mapping is indeed the same as the Brenier map in optimal transport, which is of the form $$x \mapsto x+h \nabla \varphi_t(x)$$, where $$\varphi_t$$ is the (c-convex) Kantorovish potential.


