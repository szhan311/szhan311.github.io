# Preliminaries
## Machanics
Curves: $\gamma(t): [0:1] \rightarrow \mathcal{X}$; Velocity $\dot{\gamma_t} \in \mathcal{T}_{\gamma(t)} \mathcal{X}$; Lagrangian function: $L(\gamma_t \dot{\gamma_t}, t)$
Given two endpoints $x_0, x_1 \in \mathcal{X}$, define the _**action**_ as the time integral $\mathcal{A}(\gamma)=\int_0^1 L\left(\gamma_t, \dot{\gamma}_t, t\right) d t$. 
Minimize the action along all curves: $c\left(x_0, x_1\right)=\inf _{\gamma \in \Pi\left(x_0, x_1\right)} \mathcal{A}(\gamma)=\inf _{\gamma_t} \int_0^1 L\left(\gamma_t, \dot{\gamma}_t, t\right) d t \quad$
Lagrangian flows: we refer to the optimizing curves $\gamma^*(x_0, x_0)$ as Lagrange flows, which satisfy the Euler-Lagrange equation $\frac{d}{d t} \frac{\partial}{\partial \dot{\gamma}_t} L\left(\gamma_t, \dot{\gamma}_t, t\right)=\frac{d}{d \gamma_t} L\left(\gamma_t, \dot{\gamma}_t, t\right)$
Assume that $L(\gamma_t, \dot{\gamma}_t, t)$ is strictly convex in the velocity $\dot{\gamma}_t$, then we can obtain an equivalent, Hamiltonian perspective. Define the Hamiltonian $H\left(\gamma_t, p_t, t\right)$ as the Legendre transform of $L$ with respect to $\dot{\gamma}_t$,
$H\left(\gamma_t, p_t, t\right)=\sup _{\dot{\gamma}_t}\left\langle\dot{\gamma}_t, p_t\right\rangle-L\left(\gamma_t, \dot{\gamma}_t, t\right)$
The Euler-Lagrange equations can be written as Hamiltion's equation in phase space
$\dot{\gamma}_t=\frac{\partial}{\partial p_t} H\left(\gamma_t, p_t, t\right) \quad \dot{p}_t=-\frac{\partial}{\partial \gamma_t} H\left(\gamma_t, p_t, t\right)$

## Basic of math
**Deﬁnition (Image measure or push forward measure): **take a map $T:X \rightarrow Y$ and a probability measure $\mu \in \mathcal{P} (Y)$ as: $\left(T_{\#} \mu\right)(A):=\mu\left(T^{-1}(A)\right)$ for any $A \in \mathcal{B}(Y)$
**Deﬁnition (Tangent space)**: Given a point $p \in M$, the tangent space $T_p M \subset \mathbb{R}^D$ of $M$ at $p$ is defined as $T_p M:=\{\dot{\gamma}(0) \mid \gamma:(-1,1) \rightarrow M, \gamma(0)=p\}$. Intuitively, the tangent space contains all the directions tangent to $M$ at $p$.
**Deﬁnition (Riemannian distance)**: Given two points $x, y \in M$, their Riemannian distance $d_{M}(x, y)$ is defined as $d_M(x, y):=\inf \left\{\int_a^b|\dot{\gamma}(t)| d t \mid \gamma:[a, b] \rightarrow M, \gamma(a)=x, \gamma(b)=y\right\}$.
$X$ and $Y$ are locally compact, separable, and complete metric spaces.
**Deﬁnition (Minimizing geodesic)**: A curve $\gamma : [a,b] \rightarrow M$ with constant speed such that $\gamma(a) = x, \gamma(b) = y$, and whose length is equal to $d_M (x, y)$, is called a minimizing geodesic.

## Transport maps & coupling
**Definition (Transport map): **Given $\mu \in \mathcal{P}(X)$ and $v \in \mathcal{P}(Y)$, a map $T: X \rightarrow Y$ is called a transport map from $\mu$ to $v$ if $T_{\#} \mu = v$
**Definition (Coupling or transport plan):**  We call $\gamma \in \mathcal{P}(X \times Y)$ a coupling of $\mu$ and $v$ if
$\left(\pi_X\right)_{\#} \gamma=\mu \quad \text { and } \quad\left(\pi_Y\right)_{\#} \gamma=v \text {, }$where $\pi_X(x, y)=x, \quad \pi_Y(x, y)=y \quad \forall(x, y) \in X \times Y$. We denote by $\Gamma(\mu, v)$ the set of couplings of $\mu$ and $v$.
**Remark: **Given $\mu$ and $v$, the set $\Gamma(\mu, v)$ is always nonempty, indeed the product measure $\gamma = \mu \otimes v$ (defined by $\int \phi(x, y) d \gamma(x, y)=\int \phi(x, y) d \mu(x) d \nu(y)$) for every $\phi: X \times Y \rightarrow \mathbb{R}$ is a coupling.
**Remark (Transport map vs. coupling)**. Let $T: X \rightarrow Y$ satisfy $T_{\#} \mu=v$. Consider the map$\operatorname{Id} \times T: X \rightarrow X \times Y$, i.e., $x \mapsto(x, T(x))$, and define$\gamma_T:=(\operatorname{Id} \times T)_{\#} \mu \in \mathcal{P}(X \times Y)$, we claim that $\gamma_T \in \Gamma(\mu, v)$. This proves that any transport map $T$ includes a coupling $\gamma_T$.
## Optimal Transport
Two kinds of formulation: **Monge** formulation and **Kantorovich** formulation

# Sketch
## How to calculate the action of $\rho_t$
Given Lagrangian function $\mathcal{L}\left[\rho_t, \dot{\rho}_t, t\right]$, the action is $A_L[\rho_t]=\int_0^1 \mathcal{L}\left[\rho_t, \dot{\rho}_t, t\right] d t$
Recall the definition of the Legendre transform for $\mathcal{L}\left[\rho_t, \dot{\rho}_t, t\right]$ strictly convex in $\dot{\rho}_t$, 
$\begin{aligned} & \mathcal{H}\left[\rho_t, s_t, t\right]=\sup _{\dot{\rho}_t \in \mathcal{T}_{\rho_t} \mathcal{P}} \int \dot{\rho}_t s_t d x_t-\mathcal{L}\left[\rho_t, \dot{\rho}_t, t\right] \\ & \mathcal{L}\left[\rho_t, \dot{\rho}_t, t\right]=\sup _{s_t \in \mathcal{T}_{\rho_t}^* \mathcal{P}} \int \dot{\rho}_t s_t d x_t-\mathcal{H}\left[\rho_t, s_t, t\right]\end{aligned}$
The action $A_L[\rho_t]$ is the solution to the inneroptimization
$\mathcal{A}_{\mathcal{L}}\left[\rho_t\right]=\sup _{s_t} \int s_1 \mu_1 d x_1-\int s_0 \mu_0 d x_0-\int_0^1\left(\int \frac{\partial s_t}{\partial t} \rho_t d x_t+\mathcal{H}\left[\rho_t, s_t, t\right]\right) d t$
## How to minimize the action
The optimization$\mathcal{S}=\inf _{\rho_t \in \Gamma\left(\left\{\mu_{t_i}\right\}\right)} \mathcal{A}_{\mathcal{L}}\left[\rho_t\right]=\inf _{\rho_t \in \Gamma\left(\left\{\mu_{t_i}\right\}\right)} \int_0^1 \mathcal{L}\left[\rho_t, \dot{\rho}_t, t\right] d t$
is equivalent to the following dual
$\mathcal{S}=\inf _{\rho_t \in \Gamma\left(\left\{\mu_{t_i}\right\}\right)} \sup _{s_t} \int s_1 \mu_1 d x_1-\int s_0 \mu_0 d x_0-\int_0^1\left(\int \frac{\partial s_t}{\partial t} \rho_t d x_t+\mathcal{H}\left[\rho_t, s_t, t\right]\right) d t$
So we have two goals

- **Inner optimization:** evaluating the action functional $\mathcal{A}_{\mathcal{L}}\left[\rho_t\right]$ for a given curve $\rho_t$
- **Outer optimization: **optimizing the action over curves $\rho_t \in \Gamma\left(\left\{\mu_{t_i}\right\}\right)$ satisfying the desired constraints
- ![image.png](https://cdn.nlark.com/yuque/0/2023/png/27584564/1699852344709-9869240a-0a0a-4e77-8037-81845f1ab2c3.png#averageHue=%23fbfaf9&clientId=u65838f34-583e-4&from=paste&height=340&id=G50QW&originHeight=477&originWidth=1160&originalType=binary&ratio=2&rotation=0&showTitle=false&size=199088&status=done&style=none&taskId=u0238505c-5d95-4336-8f67-cd3e4ca38fe&title=&width=826)
## Hamiltonian optimality conditions
$\frac{\partial \rho_t}{\partial t}=\frac{\delta}{\delta s_t} \mathcal{H}\left[\rho_t, s_t, t\right]$and $\frac{\partial s_t}{\partial t}=-\frac{\delta}{\delta \rho_t} \mathcal{H}\left[\rho_t, s_t, t\right]$
# A special class of Lagrangians
Definition 3.1 ((Dual) Linearizability). A Lagrangian $\mathcal{L}\left[\rho_t, \dot{\rho}_t, t\right]$ is dual linearizable if the corresponding Hamiltonian $\mathcal{H}\left[\rho_t, s_t, t\right]$ can be written as a linear functional of the density $\rho_t$. In other words, $\mathcal{H}\left[\rho_t, s_t, t\right]$ is linearizable if there exist functions $K^*\left(x_t, s_t, t\right)$, and $U\left(x_t, s_t, t\right)$ such that
$\mathcal{H}\left[\rho_t, s_t, t\right]=\int\left(K^*\left(x_t, s_t, t\right)+U\left(x_t, s_t, t\right)\right) \rho_t d x_t$
# Parameterization
We parameterize $s_t$ as a neural network $s_t(x, \theta)$, we parameterize the distribution path $\rho_t(x, \eta)$ as a generative model $x_t=(1-t) x_0+t x_1+t(1-t) \mathrm{NNET}\left(t, x_0, x_1, \eta\right), \quad x_0 \sim \mu_0, \quad x_1 \sim \mu_1$.
## Reparameterization trick
For linearizable dual objectives, we optimize
$\begin{aligned} \operatorname{LOSS}(\theta, \eta)=\min _\eta \max _\theta \int s_1(x, \theta) \mu_1 d x_1-\int s_0(x, \theta) \mu_0 d x_0 \\ \quad-\int_0^1 \int\left(\frac{\partial s_t}{\partial t}(x, \theta)+K^*\left(s_t(x, \theta), t\right)+U\left(s_t(x, \theta), t\right)\right) \rho_t(x, \eta) d x d t\end{aligned}$
Given this objective, we see that minimizing $\eta$ and maximizing $\theta$ are seperatable.
An alternative to parametrizing the distribution path $\rho_t$ is perform minimization of the LOSS via the Wasserstein gradient flow
$x_t^{\prime}=x_t+\alpha \cdot t(1-t) \nabla_x\left[\frac{\partial s_t}{\partial t}\left(x_t, \theta\right)+K^*\left(s_t\left(x_t, \theta\right), t\right)+U\left(s_t\left(x_t, \theta\right), t\right)\right]$
## Algorithm
![image.png](https://cdn.nlark.com/yuque/0/2023/png/27584564/1699855255705-28c77fbc-0f50-4140-9ebe-fa296b5e2965.png#averageHue=%23eeeeee&clientId=u65838f34-583e-4&from=paste&height=318&id=J95gc&originHeight=504&originWidth=1177&originalType=binary&ratio=2&rotation=0&showTitle=false&size=143483&status=done&style=none&taskId=u0e294a81-e410-487f-bb00-11fb2e0db96&title=&width=742.5)

# Wassertein-2 Geometry
## Definition
Given two densities with finite second moments $\mu_0, \mu_1 \in \mathcal{P}_2(\mathcal{X})$, the Wassertein-2 OT problem is defined , in the Kantorovich formulation, as a cost-minimization problem over joint distributions $\pi \in \Pi\left(\mu_0, \mu_1\right)=\left\{\pi\left(x_0, x_1\right) \mid \int \pi\left(x_0, x_1\right) d x_1=\mu_0, \int \pi\left(x_0, x_1\right) d x_0=\mu_1\right\}$, i.e.
$W_2\left(\mu_0, \mu_1\right)^2:=\inf _{\pi \in \Pi\left(\mu_0, \mu_1\right)} \int\left\|x_0-x_1\right\|^2 \pi\left(x_0, x_1\right) d x_0 d x_1$
## An alternative perspective (dynamical formulation)
An alternative perspective on the $W_2$ OT problem as an optimization over a vector field $v_t$ that transports samples according to an ODE $\dot x_t = v_t$.
The evolution of samples' density $\rho_t$, under transport by $v_t$, is governed by the continuity equation $\dot{\rho}_t =  - \nabla \cdot (\rho_t v_t)$, and we have
$W_2\left(\mu_0, \mu_1\right)^2=\inf _{\rho_t} \inf _{v_t} \int_0^1 \int \frac{1}{2}\left\|v_t\right\|^2 \rho_t d x_t d t \quad$ s.t. $\dot{\rho}_t=-\nabla \cdot\left(\rho_t v_t\right), \quad \rho_0=\mu_0, \rho_1=\mu_1$
where $\nabla \cdot ()$ is the divergence operator. 
The $W_2$ transport cost can be viewed as providing a Riemannian mannifold structure on the space of densities $\mathcal{P}_2(\mathcal{X})$

# Wassertein Fisher-Rao Geometry

- consider additional terms allowing for birth and death of particles

Extending the continuity equation to include a ‘growth term’ $g_t: \mathcal{X}, \rightarrow \mathbb{R}$, the objective is
$W F R_\lambda\left(\mu_0, \mu_1\right)^2=\inf _{\rho_t} \inf _{v_t, g_t} \int_0^1 \int\left(\frac{1}{2}\left\|v_t\right\|^2+\frac{\lambda}{2} g_t^2\right) \rho_t d x_t d t$
subject to $\dot{\rho}_t=-\nabla \cdot\left(\rho_t v_t\right)+\lambda \rho_t g_t, \rho_0=\mu_0, \rho_1=\mu_1$
We call this the _**Wasserstein Fisher-Rao (WFR)**_ distance, this problem is reffered as **unbalanced OT problem**
## A Riemanian structure on $\mathcal{M}(\mathcal{X})$
A Riemanian structure on $\mathcal{M}(\mathcal{X})$ via the WFR distance. Introducting Lagrange multipliers $s_t$ and eliminating $v_t$, $g_t$ yields the optimality conditions $v_t = \nabla s_t$ and $g_t = s_t$. 
This suggests characterizing the tangent space via the tuple $\left(s_t, \nabla s_t\right)$ and define the metric as
$\begin{aligned} T_\rho^{W F R_\lambda} \mathcal{M}(\mathcal{X}) & =\{\dot{\rho} \mid \dot{\rho}=-\nabla \cdot(\rho \nabla s)+\lambda \rho s\} \\ \left\langle\dot{\mu}_t, \dot{\rho}_t\right\rangle_{T_\rho}^{W F R_\lambda} & =\left\langle s_{\dot{\mu}_t}, s_{\dot{\rho}_t}\right\rangle_{T_\rho^*}^{W F R_\lambda}=\int\left(\left\langle\nabla s_{\dot{\mu}_t}, \nabla s_{\dot{\rho}_t}\right\rangle+\lambda s_{\dot{\mu}_t} s_{\dot{\rho}_t}\right) \rho d x .\end{aligned}$


# Action Matching

The objective is
$\mathcal{A}\left[\mu_t\right]=\sup _{s_t} \int s_1 \mu_1 d x_1-\int s_0 \mu_0 d x_0-\int_0^1 \int\left(\frac{\partial s_t}{\partial t}+\frac{1}{2}\left\|\nabla s_t\right\|^2\right) \mu_t d x_t d t$
$s_t: \mathcal{X}\times [0, 1] \rightarrow \mathbb{R}$ is parameterized by a neural network, with similar objective for $WFR_{\lambda}$
we view Action Matching as maximizing a lower bound on the action $\mathcal{A}[\mu_t]$ or kinetic energy of the curve $\mu_t : [0, 1] \rightarrow \mathcal{P}_2(\mathcal{X})$ of densities.
In particular, at those optimal $s_{\dot{\mu_t}}$ satisfying $\dot{\mu}_t=-\nabla \cdot\left(\mu_t \nabla s_{\dot{\mu}_t}\right)$, 
$\mathcal{A}\left[\mu_t\right]=\int_0^1 \frac{1}{2}\left\langle\dot{\mu}_t, \dot{\mu}_t\right\rangle_{T_{\mu_t}}^{W_2} d t=\int_0^1 \frac{1}{2}\left\langle s_{\dot{\mu}_t}, s_{\dot{\mu}_t}\right\rangle_{T_{\mu_t}^*}^{W_2} d t=\int_0^1 \int \frac{1}{2}\left\|\nabla s_t\right\|^2 \mu_t d x_t d t$

# Wassertein Lagrangian Flows
## Wassertein Lagrangian and Hamiltonian Flows
$\mathcal{L}\left[\rho_t, \dot{\rho}_t, t\right]=\mathcal{K}\left[\rho_t, \dot{\rho}_t, t\right]-\mathcal{U}\left[\rho_t, t\right]$
define the action of a curve: $\mathcal{A}(\rho_t)=\int_0^1 L\left(\rho_t, \dot{\rho}_t, t\right) d t$. 
seek the action-minimizing curve subject to the constraints: 
$\begin{aligned} \mathcal{S}_{\mathcal{L}}\left(\left\{\mu_{t_i}\right\}_{i=0}^{M-1}\right) & :=\inf _{\rho_t \in \Gamma\left(\left\{\mu_{t_i}\right\}\right)} \mathcal{A}_{\mathcal{L}}\left[\rho_t\right] \\ & :=\inf _{\rho_t} \int_0^1 \mathcal{L}\left[\rho_t, \dot{\rho}_t, t\right] d t \quad \text { s.t. } \rho_{t_i}=\mu_{t_i} \quad \forall 0 \leq i \leq M-1\end{aligned}$
where $\Gamma\left(\left\{\mu_{t_i}\right\}\right)=\left\{\rho_t:[0,1] \rightarrow \mathcal{P}(\mathcal{X}) \mid \rho_0=\mu_0, \rho_1=\mu_1, \rho_{t_i}=\mu_{t_i} \quad(\forall 1 \leq i \leq M-2)\right\}$
Define the Hamiltonian via Legendre transform:
$\mathcal{H}\left[\rho_t, s_t, t\right]=\sup _{\dot{\rho}_t \in T_{\rho_t} \mathcal{P}} \int \dot{\rho}_t s_t d x_t-\mathcal{L}\left[\rho_t, \dot{\rho}_t, t\right]=\mathcal{K}^*\left[\rho_t, s_t, t\right]+\mathcal{U}\left[\rho_t, t\right]$
Finally, $\mathcal{L}\left[\rho_t, \dot{\rho}_t, t\right]$ can be written using the Legendre transform
$\mathcal{L}\left[\rho_t, \dot{\rho}_t, t\right]=\sup _{s_t \in T_{\rho_t}^* \mathcal{P}} \int \dot{\rho}_t s_t d x_t-\mathcal{H}\left[\rho_t, s_t, t\right]$
The following theorem forms the basis for our computational approach
Theorem 1. For a Lagrangian $\mathcal{L}\left[\rho_t, \dot{\rho}_t, t\right]$ which is lsc and strictly convex in $\dot{\rho}_t$, the optimization
$\mathcal{S}=\inf _{\rho_t \in \Gamma\left(\left\{\mu_{t_i}\right\}\right)} \mathcal{A}_{\mathcal{L}}\left[\rho_t\right]=\inf _{\rho_t \in \Gamma\left(\left\{\mu_{t_i}\right\}\right)} \int_0^1 \mathcal{L}\left[\rho_t, \dot{\rho}_t, t\right] d t$
is equivalent to the following dual
$\mathcal{S}=\inf _{\rho_t \in \Gamma\left(\left\{\mu_{t_i}\right\}\right)} \sup _{s_t} \int s_1 \mu_1 d x_1-\int s_0 \mu_0 d x_0-\int_0^1\left(\int \frac{\partial s_t}{\partial t} \rho_t d x_t+\mathcal{H}\left[\rho_t, s_t, t\right]\right) d t$
Next, we have Wasserstein Hamiltonian flows satisfy the optimality conditions 
$\frac{\partial \rho_t}{\partial t}=\frac{\delta}{\delta s_t} \mathcal{H}\left[\rho_t, s_t, t\right]$and $\frac{\partial s_t}{\partial t}=-\frac{\delta}{\delta \rho_t} \mathcal{H}\left[\rho_t, s_t, t\right]$


# 

