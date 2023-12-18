---
layout: post
title:  Lagrangian Dynamics
date: 2023-01-19 20:09:00
description: 
tags: Course-notes
categories: Analytical-mechanics
tikzjax: true
---

# Principles of Newtonian Mechanics

Newton’s three laws
Linear Momentum Conservation
Angular Momentum Conservation
Energy Conservation

# Constraints

Holonomic Constraints: $$f( \zeta_1, \zeta_2, \cdots, \zeta_M, t) = 0$$

Non-holonomic Constraints

# Virtual Work

The principle of virtual work: $$\sum_i \mathbf{F}_i^{(a)} \cdot \delta \mathbf{r}_i = 0$$when the system of particles in equilibrium

# d’Alembert’s Principle

d’Alembert’s Principle: $$\sum_i (\dot{\mathbf{p}_i}-\mathbf{F}_i^{(a)}) \cdot \delta \mathbf{r}_i = 0$$

# Generalized Coordinates

$$\begin{align*} f_1(\mathbf{r}_1, \cdots, \mathbf{r}_N, t) &= 0 \\ \cdots \\ f_p(\mathbf{r}_1, \cdots, \mathbf{r}_N, t) &= 0 \end{align*}$$

out of $$3N$$coordinates $$(x_1, y_1, z_1), \cdots, (x_N, y_N, z_N)$$, only $$n = 3N - P$$of them can be tanken as mutually independent, and the system is said to possess $$n$$degrees of freedom.

It is possible to introduce $$n$$generalized coordinates $$q_1, \cdots, q_n$$in terms of which:
$$r_i = r_i(q_1, \cdots, q_n, t), i = 1, \cdots, N$$

# Lagrange's Eqautions

d’Alembert’s Principle + Generalized Coordinates $$\rightarrow$$ Lagrange's equations
Generalized forces: $$Q_k = \sum_{i=1}^N \mathbf{F}_i \cdot \frac{\partial \mathbf{r}_i}{\partial q_k}$$
Lagrange's equations: $$\frac{d}{dt} (\frac{\partial T}{\partial \dot{q}_k}) - \frac{\partial T}{\partial q_k} = Q_k, k = 1,\cdots, n$$

if the applied forces $$\mathbf{F}_i$$ can be derived from a scalar potential $$V(\mathbf{r}_1, \cdots, \mathbf{r}_N, t)$$

$$F_i = - \nabla_iV$$, then we have:$$Q_k = - \frac{\partial V}{\partial q_k}$$

The Lagrange's equations are equivalent to:

$$\frac{d}{dt} (\frac{\partial L}{\partial \dot{q}_k}) - \frac{\partial L}{\partial q_k}=0, k = 1,\cdots, n$$


# Generalised Potentials

If the generalised forces can be derived from a function $$U(q_1, \cdots, q_n, \dot q_1, \cdots, \dot q_n, t)$$:

$$Q_k = - \frac{\partial U}{\partial q_k} + \frac{d}{dt} (\frac{\partial U}{\partial \dot q_k})$$, and $$L = T-U$$
The function $$U$$ is called a generalised potential

# Rayleigh’s Dissipation Function

Whenever the generalised forces are of the form:$$Q_k = - \frac{\partial U}{\partial q_k} + \frac{d}{dt} (\frac{\partial U}{\partial \dot q_k}) + Q_k'$$

$$Q_k'$$denotes the part of the generalised forces that cannot be derived from a generalised potential
the equations of motion become:

$$\frac{d}{dt} (\frac{\partial L}{\partial \dot{q}_k}) - \frac{\partial L}{\partial q_k} = Q_k', k = 1,\cdots, n$$
Rayleigh introduced the dissipation function deﬁned by

$$\mathcal{F} = \frac{1}{2} \sum_{i=1}^N (k_{ix}v_{ix}^2 + k_{iy}v_{iy}^2 + k_{iz}v_{iz}^2)$$

$$Q_k' = - \frac{\partial \mathcal{F}}{ \partial \dot q_k}$$, the $$Q_k^′$$represent **viscous frictional force**s proportional to the velocities of the particles

$$\frac{d}{dt} (\frac{\partial L}{\partial \dot{q}_k}) - \frac{\partial L}{\partial q_k} + \frac{\partial \mathcal{F}}{\partial \dot q_k}=0, k = 1,\cdots, n$$


# Variations

$$J[y] = \int_{x_1}^{x_2} f(y(x), y'(x),x)dx$$

$$\delta J = \int_{x_1}^{x_2} (\frac{\partial f}{\partial y} \delta y+\frac{\partial f}{\partial y'}\delta y' )dx$$, $$\delta y' = \frac{d}{dx}(\delta y)$$

$$\delta J = \int_{x_1}^{x_2} [\frac{\partial f}{\partial y}+\frac{d}{dx}(\frac{\partial f}{\partial y'}) ] \delta y dx = 0$$ $$\rightarrow$$ 

$$\frac{\partial f}{\partial y}+\frac{d}{dx}(\frac{\partial f}{\partial y'})=0$$ (**Euler equation**)

# Principle of Least Action 

Let a holonomic mechanical system be described by the Lagrangian $$L(q, \dot q, t)$$, the actural motion of the the system from instant $$t_1$$to instant $$t_2$$is such that the action

$$S = \int _{t_1}^{t_2} L(q, \dot q, t) dt$$

is least (more generally, stationary) for ﬁxed initial and ﬁnal points of the comparison paths in conﬁguration space.

# LNN

Euler-Lagrange equation: $$\frac{d}{dt} \frac{\partial L}{\partial \dot q_j} = \frac{\partial L}{\partial q_j}$$

use the chain rule: $$\frac{\partial L}{\partial \dot q} (\frac{\partial L}{\partial \dot q_j}) \ddot q + \frac{\partial L}{\partial q} (\frac{\partial L}{\partial \dot q_j}) \dot q  = \frac{\partial L}{\partial q_j}$$

Vectorized form: $$(\nabla_{\dot q} \nabla_{\dot q}^T L) \ddot q + (\nabla_{q} \nabla_{\dot q}^T L) \dot q = \nabla _qL$$

Solve for $$\ddot q$$:$$\ddot q = (\nabla_{\dot q} \nabla_{\dot q}^T L) ^{-1} [\nabla _qL - (\nabla_{q} \nabla_{\dot q}^T L) \dot q ]$$

