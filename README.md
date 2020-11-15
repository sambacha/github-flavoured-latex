# `gfm-latex`

> Generate a URL that will display your LaTeX Equation in markdown format, with 100% LaTeX Character Support

[visit the github pages application to generate](https://sambacha.github.io/github-flavoured-latex/)

## Usage

- LaTeX Input:

```latex
\begin{equation*}
l_{t+1}^{\prime}(h, a):=\frac{a \times \sqrt{l * \max \left(\min \left(\theta, l^{2}\right), 1\right)}}{100}
\end{equation*}
```

- Generates:

<img src="https://render.githubusercontent.com/render/math?math=%5Cbegin%7Bequation*%7D%0Al_%7Bt%2B1%7D%5E%7B%5Cprime%7D(h%2C%20a)%3A%3D%5Cfrac%7Ba%20%5Ctimes%20%5Csqrt%7Bl%20*%20%5Cmax%20%5Cleft(%5Cmin%20%5Cleft(%5Ctheta%2C%20l%5E%7B2%7D%5Cright)%2C%201%5Cright)%7D%7D%7B100%7D%0A%5Cend%7Bequation*%7D">

### Complex

```latex
\(F\left(t, t_{1}, T\right)=E_{t}^{Q}\left[\int_{t_{1}}^{T} \frac{X(u)}{T-t_{1}} d u\right]=\left\{\begin{array}{l}\frac{e^{r(T-t)}-e^{r\left(t_{1}-t\right)}}{\left(T-t_{1}\right) r} X_{t} \\ \int_{t_{1}}^{t} \frac{X_{u}}{T-t_{1}} d u+\frac{e^{r(T-t)}-1}{\left(T-t_{1}\right) r} X_{t} \\ (6.7)\end{array}\right.\)
```

<img src="https://render.githubusercontent.com/render/math?math=%5C(F%5Cleft(t%2C%20t_%7B1%7D%2C%20T%5Cright)%3DE_%7Bt%7D%5E%7BQ%7D%5Cleft%5B%5Cint_%7Bt_%7B1%7D%7D%5E%7BT%7D%20%5Cfrac%7BX(u)%7D%7BT-t_%7B1%7D%7D%20d%20u%5Cright%5D%3D%5Cleft%5C%7B%5Cbegin%7Barray%7D%7Bl%7D%5Cfrac%7Be%5E%7Br(T-t)%7D-e%5E%7Br%5Cleft(t_%7B1%7D-t%5Cright)%7D%7D%7B%5Cleft(T-t_%7B1%7D%5Cright)%20r%7D%20X_%7Bt%7D%20%5C%5C%20%5Cint_%7Bt_%7B1%7D%7D%5E%7Bt%7D%20%5Cfrac%7BX_%7Bu%7D%7D%7BT-t_%7B1%7D%7D%20d%20u%2B%5Cfrac%7Be%5E%7Br(T-t)%7D-1%7D%7B%5Cleft(T-t_%7B1%7D%5Cright)%20r%7D%20X_%7Bt%7D%20%5C%5C%20(6.7)%5Cend%7Barray%7D%5Cright.%5C)">


## Source

```javascript
// SPDX-License-Identifier: ISC
"use strict";
function toGithubRenderURL() {
  var input = document.getElementsByName("input")[0].value;
  var output =
    '<img src="https://render.githubusercontent.com/render/math?math=' +
    encodeURIComponent(input) +
    '">';
  document.getElementsByName("output")[0].value = output;
  document.getElementById("result").innerHTML = output;
}
```
## Other Tools

- [Math Pix](https://mathpix.com/)

## License

ISC
