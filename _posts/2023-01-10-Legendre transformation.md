---
layout: post
title:  Legendre transformation
date: 2023-01-20 20:36:00
description: 
tags: Course-notes
categories: Analytical-mechanics
tikzjax: true
---

# 单变量函数的Legendre transformation
### 定义

考虑凸函数$$f(x)$$, $$df = f'(x) dx = u dx$$, 其中$$u = f'(x)$$

其中 $$udx = dux - xdu$$, 所以$$d(ux - f) = xdu$$

这里定义$$g(u) = ux-f$$，则：$$g'(u) = x$$

我们把$$g(u)$$称作$$f(x)$$的Legendre transformation

### 几何意义

$$u$$和$$g(u)$$分别对应的是点$$(x,f(x))$$处的斜率和截距，也就是说，根据$$x$$和$$f(x)$$可以唯一确定$$u$$和$$g(u)$$，反之亦然，如果知道$$f(x)$$的切线簇，则其包络线就是$$f(x)$$

# 多元函数的Legendre transformation

多元函数$$f(x_1, \cdots, x_n)$$的Legendre transformation:

$$g(u_1, \cdots, u_n) = \sum _{i=1}^n u_ix_i- f(x_1, \cdots, x_n)$$

## 经典力学中的应用——Lagrangian到Hamiltonian的变换
### 推导过程
$$L = L(q, \dot q, t)$$
对$$L$$进行全微分：

$$dL = \sum_i \frac{\partial L}{\partial q_i}d q_i + \sum_i \frac{\partial L}{\partial \dot q_i}d \dot q_i + \frac{\partial L}{\partial t}dt = \sum_i \frac{\partial L}{\partial q_i}d q_i + \sum_i [ d (\frac{\partial L}{\partial \dot q_i} \dot q_i) - \dot q_i d(\frac{\partial L}{\partial \dot q_i})] + \frac{\partial L}{\partial t}dt$$
令$$p_i = \frac{\partial L}{\partial \dot q_i}$$, 代入$$\frac{\partial L}{\partial q_i}= \frac{d}{dt} \frac{\partial L}{\partial \dot q_i} \quad (i = 1, \cdots, n)$$

$$dL = \sum_i \dot p_i dq_i + \sum_i d(p_i \dot q_i) - \sum_i \dot q_idp_i + \frac{\partial L}{\partial t} dt$$
令$$H(q, p, t) = \sum_i p_i \dot q_i-L(q, \dot q, t)$$, 则

$$dH =  \sum_i \dot q_idp_i -\sum_i \dot p_i dq_i -  \frac{\partial L}{\partial t} dt$$

从而得到：

$$\dot q_i=  \frac{\partial H}{\partial p_i}$$

$$\dot p_i= - \frac{\partial H}{\partial q_i}$$

### 坐标变换

Lagrangian的坐标$$q, \dot q$$, Hamiltonian的坐标$$q, p = \frac{\partial L}{\partial \dot q}$$





