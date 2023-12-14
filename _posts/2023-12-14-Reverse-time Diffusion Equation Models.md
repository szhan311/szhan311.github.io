# What is the reversal of a diffusion process?
Suppose you have an initial distribution $p(x;0)$and some drift and diffusion coefficients $f$and $g$. Together, they describe a distribution over the trajectories of your system through time Suppose at time $T$, the marginal distributionover the trajectories of your system through time. Suppose at time $T$, the margianl distribution of the states is $p(x; T)$. Can you describe a diffusion process such that it starts with a distribution $q(x; 0): = p(x; T)$and evolves such that the distribution of the trajectories is the same as in the original process but with the tiem reversed? Of course, in such a case we shall have $q(x; T) = p(x; 0)$.
# Non-linear case
### Ito SDE and reverse time SDE

- Given a SDE: $d \boldsymbol{x} = \boldsymbol{f} (\boldsymbol{x}, t)dt + \boldsymbol{G}(\boldsymbol{X}, t)d\boldsymbol{w}$, where $\mathbf{f}(\cdot, t): \mathbb{R}^d \rightarrow \mathbb{R}^d$ and $\mathbf{G}(\cdot, t): \mathbb{R}^d \rightarrow \mathbb{R}^{d \times d}$

The reverse time SDE is given by
$\mathrm{d} \mathbf{x}=\left\{\mathbf{f}(\mathbf{x}, t)-\nabla \cdot\left[\mathbf{G}(\mathbf{x}, t) \mathbf{G}(\mathbf{x}, t)^{\top}\right]-\mathbf{G}(\mathbf{x}, t) \mathbf{G}(\mathbf{x}, t)^{\top} \nabla_{\mathbf{x}} \log p_t(\mathbf{x})\right\} \mathrm{d} t+\mathbf{G}(\mathbf{x}, t) \mathrm{d} \overline{\mathbf{w}}$
where we define $\nabla \cdot \mathbf{F}(\mathbf{x}):=\left(\nabla \cdot \mathbf{f}^1(\mathbf{x}), \nabla \cdot \mathbf{f}^2(\mathbf{x}), \cdots, \nabla \cdot \mathbf{f}^d(\mathbf{x})\right)^{\top}$ for a matrix-valued function $\mathbf{F}(\mathbf{x}):=\left(\mathbf{f}^1(\mathbf{x}), \mathbf{f}^2(\mathbf{x}), \cdots, \mathbf{f}^d(\mathbf{x})\right)^{\top}$
### A Special case: Diffusion model as SDEs
$dX = f(X, t)dt + g(t) dw$
The reverse time SDE is:
 $\begin{align}
dX &= (f (X, t) - \frac{1}{p(X, t)}\frac{\partial}{\partial X} g^2(t)p(X, t))dt + g(t)dw \\ &= (f (X, t) -g^2(t) \frac{\partial}{\partial X} \log p(X, t))dt + g(t)dw

\end{align}$
# The linear Problem

- Gaussian-Markov processes: $dx = Ax dt + B dw$, here $A$and $B$are constant matrices, $Re[\lambda_i(A)] < 0$for all $i$and $w(\cdot)$is a vector Wiener process such that $x(t)$is independent of future increments of $w$, but not of past ones.
- Solution: $x(t) = \int_{-\infty}^{t} e^{A(t-s)}Bdw(s)$
- A reverse time model: $dx = \bar A dt + \bar B d \bar w$, where now $Re[\lambda_i(\bar A)] >0$for all $i$.
- Let $P = E[x(t) x^T(t)]$, the matrix $P$is the solution of the linear matrix equation $PA^T + AP = -BB^T$, and id nonsingular recisely when rank $[B AB \cdots A^{n-1}B] = n$
   - Here $P$is the covariance matrix
   - Proof: 
      - take the differential of $x(t) x^T(t)$: $d(xx^T) = dxx^T + xdx^T + dxdx'$; 
      - Substitude $dx = Ax dt + B dw$into the above equation: $d(xx^T) = (Axdt + Bdw)dx^T + x(A^T x^T dt + B^T dw^T) + (Axdt + Bdw)(A^Tx^T dt + B^T dw^T )$
      - Taking expection on both sides and using the fact that the expected value of the increments of the Wiener process $dw$are zero: $\frac{d}{dt} E(xx^T) = AE[xx^T] + E[x x^T] A^T + BB^T$
      - Solving the above matrix differential equations for $E[xx^T]$ gives $PA^T + AP = -BB^T$
- Suppose $P$is nonsingular, and define $d \bar w = dw - B^TP^{-1}xdt, \bar w(0) = 0$
- $dx = (A + BB^TP^{-1})dt + Bd\bar{w}$

# The Kolmogorov Equations

- The Forward Kolmogorov Equation: $\frac{\partial}{\partial t} p(x ; t \mid y ; s)=-\frac{\partial}{\partial x}(f(x, t) p(x ; t \mid y ; s))+\frac{1}{2} \frac{\partial^2}{\partial x^2}\left(g^2(x ; t) p(x ; t \mid y ; s)\right)$
- The Backward Kolmogorov Equation: $-\frac{\partial}{\partial s} p(x ; t \mid y ; s)=f(y, s) \frac{\partial}{\partial y} p(x ; t \mid y ; s)+\frac{g^2(y ; s)}{2} \frac{\partial^2}{\partial y^2} p(x ; t \mid y ; s)$
- $E[dX] = f(X, t)dt$, $Var(dX) = g^2(X, t)dt - O(dt^2) \approx g^2(X, t) dt$
## The Forward Kolmogorov Equation

- $p(x;t|y,s) = \int_{-\infty}^{\infty} p(x; t | k; m) p(k;m |y;s)dk$, where $p(x; t|y, s)$represents the probability $p(X_t = t|X_s = y)$with $t \geq s$always.
- $p(x;t) = \int_{-\infty}^{\infty} p(x; t | k; m) p(k;m)dk$
-  The initial marginal density $p(x;0)$determine the entire diffusion process.

$p(x;t + dt|y,s) = \int_{-\infty}^{\infty} p(x; t + dt | m;t) p(m;t |y;s)dm$
Define: $\phi_t(\Delta; z) = p(z+\Delta; t+dt|z;t)$, then $m = x = \Delta \Rightarrow dm = -d \Delta$; $m = \pm \infty \Rightarrow \Delta =  \mp \infty$
$\begin{aligned} m & =x-\Delta \\ \Rightarrow \mathrm{d} m & =-\mathrm{d} \Delta \\ m= \pm \infty & \Rightarrow \Delta=\mp \infty \\ \Rightarrow p(x ; t+\mathrm{d} t \mid y ; s) & =-\int_{\infty}^{-\infty} \phi_t(\Delta ; m) p(m ; t \mid y ; s) \mathrm{d} \Delta \\ & =\int_{-\infty}^{+\infty} \phi_t(\Delta ; m) p(m ; t \mid y ; s) \mathrm{d} \Delta\end{aligned}$
Next Taylor expand the entir function within the integral with respect to $m$around $x$:
$\begin{aligned} p(x ; t+\mathrm{d} t \mid y ; s) & =\int_{-\infty}^{+\infty} \phi_t(\Delta ; x) p(x ; t \mid y ; s) \mathrm{d} \Delta \\ & -\int_{-\infty}^{+\infty} \Delta \frac{\partial}{\partial x} \phi_t(\Delta ; x) p(x ; t \mid y ; s) \mathrm{d} \Delta \\ & +\int_{-\infty}^{+\infty} \frac{\Delta^2}{2} \frac{\partial^2}{\partial x^2} \phi_t(\Delta ; x) p(x ; t \mid y ; s) \mathrm{d} \Delta\end{aligned}$
Using the fact that $\phi_t$integrates to 1 over $\Delta$:
$\begin{aligned} p(x ; t+\mathrm{d} t \mid y ; s)-p(x ; t \mid y ; s) & =-\frac{\partial}{\partial x}\left(\mathbb{E}_{\Delta \sim \phi_t(; x)}[\Delta] p(x ; t \mid y ; s)\right) \\ & +\frac{1}{2} \frac{\partial^2}{\partial x^2}\left(\mathbb{E}_{\Delta \sim \phi_t(; x)}\left[\Delta^2\right] p(x ; t \mid y ; s)\right) \\ & \vdots\end{aligned}$
Define 
$\begin{aligned} \mathbb{E}_{\Delta \sim \phi_t(; x)}[\Delta] & :=f(x, t) \mathrm{d} t \\ \mathbb{E}_{\Delta \sim \phi_t(; x)}\left[\Delta^2\right] & :=g^2(x, t) \mathrm{d} t\end{aligned}$
Dividing by $dt$on both the sides we get the partial differential equation:
$\frac{\partial}{\partial t} p(x ; t \mid y ; s)=-\frac{\partial}{\partial x}(f(x, t) p(x ; t \mid y ; s))+\frac{1}{2} \frac{\partial^2}{\partial x^2}\left(g^2(x ; t) p(x ; t \mid y ; s)\right)$
$dX \sim \phi_t(;X)$, $E[dX] = f(X, t)dt$, $Var(dX) = g^2(X, t)dt - O(dt^2) \approx g^2(X, t) dt$
The function $f$is called drift coefficient of our diffusion coefficient, and $g$is our diffusion coefficient. 
$dX = f(X, t)dt + g(X, t) dw$, where $dw \sim D$such that $D$is sime distribution with a varience $dt$and a mean of $0$. This diffusion is called Ito diffusion SDE.
We can always consider $D$to be Gaussian distribution, $\int_0^{\frac{1}{N}} dw \sim \mathcal{N}(0, \frac{1}{N})$
The unconditioned forward equation: 
$\frac{\partial}{\partial t} p(x ; t)=-\frac{\partial}{\partial x}(f(x, t) p(x ; t))+\frac{1}{2} \frac{\partial^2}{\partial x^2}\left(g^2(x ; t) p(x ; t)\right)$

## The Backward Kolmogorov Equation
$\begin{aligned} p(x ; t \mid y ; s-\mathrm{d} s) & =\int_{-\infty}^{+\infty} \phi_{s-\mathrm{d} s}(\Delta ; y) p(x ; t \mid y+\Delta ; s) \mathrm{d} \Delta \\ & =\int_{-\infty}^{+\infty} \phi_{s-\mathrm{d} s}(\Delta ; y) p(x ; t \mid y ; s) \mathrm{d} \Delta \\ & +\int_{-\infty}^{+\infty} \phi_{s-\mathrm{d} s}(\Delta ; y) \Delta \frac{\partial}{\partial y} p(x ; t \mid y ; s) \mathrm{d} \Delta \\ & +\int_{-\infty}^{+\infty} \phi_{s-\mathrm{d} s}(\Delta ; y) \frac{\Delta^2}{2} \frac{\partial^2}{\partial y^2} p(x ; t \mid y ; s) \mathrm{d} \Delta \\ & \vdots\end{aligned}$
$-\frac{\partial}{\partial s} p(x ; t \mid y ; s)=f(y, s) \frac{\partial}{\partial y} p(x ; t \mid y ; s)+\frac{g^2(y ; s)}{2} \frac{\partial^2}{\partial y^2} p(x ; t \mid y ; s)$
Then the reverse SDE:
$\mathrm{d} X=\left(f(X, t)-\frac{1}{p(X, t)} \frac{\partial}{\partial X} g^2(X, t) p(X, t)\right) \mathrm{d} t+g(X, t) \mathrm{d} w$
Proof see the original paper

[https://www.vanillabug.com/posts/sde/](https://www.vanillabug.com/posts/sde/)
[https://ludwigwinkler.github.io/blog/FokkerPlanck/](https://ludwigwinkler.github.io/blog/FokkerPlanck/)
[https://ludwigwinkler.github.io/blog/Kramers/](https://ludwigwinkler.github.io/blog/Kramers/)



