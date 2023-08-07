# Visual representation of fourier series

The fourier series the mathematical concept of representing a complex periodic functions as a sum sines, It was developed by joseph Fourier in 18th century while trying to find a solution for the heat wave equation.

This code allows us to visualize the fourier using epicycles by using the p5.js library to draw the function.

The code has 3 built in function for square, sawtooth and triangular wave. In future more wave forms might be added.

## The equation 

$f(x)=\frac{a_{0}}{2}+\sum_{n=1}^{\infty} \{a_{n}\cos\frac{n\pi}{T}+b_{n}\sin\frac{n\pi}{T}\}$

where $a_{0},a_{n},b_{n}$ are the fourier coefficients, represented as:

$a_{0}=\frac{1}{T_{0}} \int_{ \frac{-T_{0}}{2}}^{\frac{T_{0}}{2}}f(x)dx$

$a_{n} = \frac{2}{T_{0}} \int_{\frac{-T_{0}}{2}}^{\frac{T_{0}}{2}}f(x)\cos(\frac{2\pi nt}{T_{0}})dx$

$b_{n} = \frac{2}{T_{0}} \int_{ \frac{-T_{0}}{2}}^{\frac{T_{0}}{2}}f(x)\sin(\frac{2\pi nt}{T_{0}})dx$

- Where $T_{0}$ is the time period of the function
