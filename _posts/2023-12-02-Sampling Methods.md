---
layout: post
title:  Sampling Methods
date: 2023-12-02 20:30:00
description: 
tags: Literature-review
categories: Diffusion-models
tikzjax: true
---

### Hamiltonian Monte Carlo and its varients

Gibbs canonical distribution: 

- $$p(\textbf{x}) \propto \exp \left(-\frac{U(\textbf{x})}{T}\right)$$

- $$H(\textbf{x}) = U(\textbf{x}) + K(\textbf{v})$$

- $$p(\textbf{x, v}) \propto \exp \left(-\frac{H(\textbf{x})}{T}\right) = \exp \left(-\frac{U(\textbf{x})}{T}\right)\exp \left(-\frac{K(\textbf{v})}{T}\right) \propto p(\textbf{x}) p(\textbf{v})$$

- $$p(\textbf{v}) \propto \exp (-\frac{1}{2} \textbf{v}^T \textbf{v}), K(\textbf{v}) = -\log p(\textbf{v}) \propto \frac{1}{2} \textbf{v}^T \textbf{v}$$

- $$U(\textbf{x}) = -\log p(\textbf{x}), \nabla_x U = - \nabla_x \log p(\textbf{x})$$

- **Variables**: Target variables (position term): $$\mathbf{x}$$; Auxiliary variables (momentum term): $$\mathbf{v}$$; $$\mathbf{z = (x, v)}$$

- **Why auxiliary**: auxiliary variables provide **efficient exploration**

- **Marginalizing**: marginalizing the the auxiliary variables of $$p\mathbf{(x,v)}$$we get $$p(\mathbf{x})$$

- **Jump process**: added to **ensure ergodicity, **e.g., momentum resampling

- **Stationary ergodic process: **ensure simulating from the process can be equated with drawing samples from the posterior

- **Metropolis-Hastings (MH) correction**: applied if the stationary distribution is not the target distribution; HMC have a **low rejection rate**

- LMC:$$\mathrm{d} X_t=-\nabla U\left(X_t\right) \mathrm{d} t+\sqrt{2} \mathrm{~d} B_t$$

### A Complete Recipe for Stochastic Gradient MCMC

- **Target distribution**: 

$$p^s(\mathbf{z}) \propto \exp (-H(\mathbf{z}))$$

- **SDE with specified target dsitribution**: $$\mathrm{d} \mathbf{z}=\mathbf{f}(\mathbf{z}) \mathrm{d} t+\sqrt{2 \mathbf{D}(\mathbf{z})} \mathrm{d} \mathbf{W}(t)$$

- $$\mathbf{f}(\mathbf{z})=-[\mathbf{D}(\mathbf{z})+\mathbf{Q}(\mathbf{z})] \nabla H(\mathbf{z})+\Gamma(\mathbf{z}), \quad \Gamma_i(\mathbf{z})=\sum_{j=1}^d \frac{\partial}{\partial \mathbf{z}_j}\left(\mathbf{D}_{i j}(\mathbf{z})+\mathbf{Q}_{i j}(\mathbf{z})\right)$$

   - $$\mathbf{D(z)}$$: a **positive semideﬁnite** diffusion matrix; the strength of the Wienerprocess-driven diffusion. 

   - $$\mathbf{Q(z)}$$ is a **skew-symmetric** curl matrix; the deterministic traversing effects.

   - Adjuct $$\mathbf{D(z)}$$and $$\mathbf{Q(z)}$$to attain faster convergenve

- **Stationary proof: **

   - Fokker-Planck equation:  $$\partial_t p(\mathbf{z}, t)=-\sum_i \frac{\partial}{\partial \mathbf{z}_i}\left(\mathbf{f}_i(\mathbf{z}) p(\mathbf{z}, t)\right)+\sum_{i, j} \frac{\partial^2}{\partial \mathbf{z}_i \partial \mathbf{z}_j}\left(\mathbf{D}_{i j}(\mathbf{z}) p(\mathbf{z}, t)\right)$$

   - $$\partial_t p(\mathbf{z}, t)=\nabla^T \cdot([\mathbf{D}(\mathbf{z})+\mathbf{Q}(\mathbf{z})][p(\mathbf{z}, t) \nabla H(\mathbf{z})+\nabla p(\mathbf{z}, t)]) = 0$$, when we replace $$p(\mathbf{z}, t)$$as $$e^{-H(\mathbf{z})}$$

### Hamiltonian Dynamics with Non-canonical Momentum

- **Microcanonical Hamiltonian Monte Carlo**

   - **ODE:** $$\begin{aligned} & \dot{\boldsymbol{x}}=\boldsymbol{u} \\ & \dot{\boldsymbol{u}}=P(\boldsymbol{u}) \boldsymbol{f}(\boldsymbol{x})\end{aligned}$$

      - the projector $$P\mathbf{(u) = I - uu^T}$$, the force $$\mathbf{f(x) = - \nabla S(x)}/ (d-1)$$

   - **The Liouville equation**: $$\dot{\rho}(\boldsymbol{z})=-\nabla \cdot(\rho \boldsymbol{B}) \equiv \sum_{i=1}^{2 d-1} \frac{\partial}{\partial z^i}\left(\rho(\boldsymbol{z}) B^i(\boldsymbol{z})\right)$$

   - **The stationary solution** of Liouville equation:  $$\rho_{\infty} \propto e^{-S(\mathbf{x})} \sqrt{g(\mathbf{v})}$$, $$\dot{\rho}_{\infty} = 0$$

- **Microcanonical Langevin Monte Carlo**

   - **SDE:** $$\begin{aligned} & d{\boldsymbol{x}}=\boldsymbol{u} dt\\ & d{\boldsymbol{u}}=P(\boldsymbol{u}) \boldsymbol{f}(\boldsymbol{x})dt + \eta P(\mathbf{u})d\mathbf{W}\end{aligned}$$

   - **The Fokker-Planck equation:** $$\dot{\rho} = -\nabla \cdot (\rho \mathbf{B}) + \frac{\eta^2}{2} \hat{\nabla}^2 \rho$$

   - **The stationary solution** of the Fokker-Planck equation: $$\dot{\rho}_{\infty} = 0 + \hat{\nabla}^2\rho_{\infty}  = 0$$
