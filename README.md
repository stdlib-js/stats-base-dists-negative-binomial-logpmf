<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# Logarithm of Probability Mass Function

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Evaluate the natural logarithm of the [probability mass function][pmf] (PMF) for a [negative binomial][negative-binomial-distribution] distribution.

<section class="intro">

The [probability mass function][pmf] (PMF) for a [negative binomial][negative-binomial-distribution] random variable `X` is

<!-- <equation class="equation" label="eq:negative_binomial_pmf" align="center" raw="f(x; r, p) = P(X = x; r,p) = \binom{k+r-1}{x} p^r(1-p)^x \quad\text{for }x = 0, 1, 2, \dotsc" alt="Probability mass function (PMF) for a negative binomial distribution."> -->

```math
f(x; r, p) = P(X = x; r,p) = \binom{k+r-1}{x} p^r(1-p)^x \quad\text{for }x = 0, 1, 2, \dotsc
```

<!-- <div class="equation" align="center" data-raw-text="f(x; r, p) = P(X = x; r,p) = \binom{k+r-1}{x} p^r(1-p)^x \quad\text{for }x = 0, 1, 2, \dotsc" data-equation="eq:negative_binomial_pmf">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@51534079fef45e990850102147e8945fb023d1d0/lib/node_modules/@stdlib/stats/base/dists/negative-binomial/logpmf/docs/img/equation_negative_binomial_pmf.svg" alt="Probability mass function (PMF) for a negative binomial distribution.">
    <br>
</div> -->

<!-- </equation> -->

where `r > 0` is the number of successes until experiment is stopped and `0 < p <= 1` is the success probability. The random variable `X` denotes the number of failures until the `r` success is reached. 

</section>

<!-- /.intro -->

<section class="installation">

## Installation

```bash
npm install @stdlib/stats-base-dists-negative-binomial-logpmf
```

Alternatively,

-   To load the package in a website via a `script` tag without installation and bundlers, use the [ES Module][es-module] available on the [`esm`][esm-url] branch (see [README][esm-readme]).
-   If you are using Deno, visit the [`deno`][deno-url] branch (see [README][deno-readme] for usage intructions).
-   For use in Observable, or in browser/node environments, use the [Universal Module Definition (UMD)][umd] build available on the [`umd`][umd-url] branch (see [README][umd-readme]).

The [branches.md][branches-url] file summarizes the available branches and displays a diagram illustrating their relationships.

To view installation and usage instructions specific to each branch build, be sure to explicitly navigate to the respective README files on each branch, as linked to above.

</section>

<section class="usage">

## Usage

```javascript
var logpmf = require( '@stdlib/stats-base-dists-negative-binomial-logpmf' );
```

#### logpmf( x, r, p )

Evaluates the natural logarithm of the [probability mass function][pmf] for a [negative binomial][negative-binomial-distribution] distribution with number of successes until experiment is stopped `r` and success probability `p`.

```javascript
var y = logpmf( 5.0, 20.0, 0.8 );
// returns ~-1.853

y = logpmf( 21.0, 20.0, 0.5 );
// returns ~-2.818

y = logpmf( 5.0, 10.0, 0.4 );
// returns ~-4.115

y = logpmf( 0.0, 10.0, 0.9 );
// returns ~-1.054
```

While `r` can be interpreted as the number of successes until the experiment is stopped, the [negative binomial][negative-binomial-distribution] distribution is also defined for non-integers `r`. In this case, `r` denotes shape parameter of the [gamma mixing distribution][negative-binomial-mixture-representation].

```javascript
var y = logpmf( 21.0, 15.5, 0.5 );
// returns ~-3.292

y = logpmf( 5.0, 7.4, 0.4 );
// returns ~-2.976
```

If provided a `r` which is not a positive number, the function returns `NaN`.

```javascript
var y = logpmf( 2.0, 0.0, 0.5 );
// returns NaN

y = logpmf( 2.0, -2.0, 0.5 );
// returns NaN
```

If provided `NaN` as any argument, the function returns `NaN`.

```javascript
var y = logpmf( NaN, 20.0, 0.5 );
// returns NaN

y = logpmf( 0.0, NaN, 0.5 );
// returns NaN

y = logpmf( 0.0, 20.0, NaN );
// returns NaN
```

If provided a success probability `p` outside of `[0,1]`, the function returns `NaN`.

```javascript
var y = logpmf( 2.0, 20, -1.0 );
// returns NaN

y = logpmf( 2.0, 20, 1.5 );
// returns NaN
```

#### logpmf.factory( r, p )

Returns a function for evaluating the natural logarithm of the [probability mass function][pmf] (PMF) of a [negative binomial][negative-binomial-distribution] distribution with number of successes until experiment is stopped `r` and success probability `p`.

```javascript
var mylogpmf = logpmf.factory( 10, 0.5 );
var y = mylogpmf( 3.0 );
// returns ~-3.617

y = mylogpmf( 10.0 );
// returns ~-2.43
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var randu = require( '@stdlib/random-base-randu' );
var round = require( '@stdlib/math-base-special-round' );
var logpmf = require( '@stdlib/stats-base-dists-negative-binomial-logpmf' );

var i;
var r;
var p;
var x;
var y;

for ( i = 0; i < 10; i++ ) {
    x = round( randu() * 30.0 );
    r = randu() * 50.0;
    p = randu();
    y = logpmf( x, r, p );
    console.log( 'x: %d, r: %d, p: %d, ln(P(X=x;r,p)): %d', x, r, p.toFixed( 4 ), y.toFixed( 4 ) );
}
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## Copyright

Copyright &copy; 2016-2025. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/stats-base-dists-negative-binomial-logpmf.svg
[npm-url]: https://npmjs.org/package/@stdlib/stats-base-dists-negative-binomial-logpmf

[test-image]: https://github.com/stdlib-js/stats-base-dists-negative-binomial-logpmf/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/stats-base-dists-negative-binomial-logpmf/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/stats-base-dists-negative-binomial-logpmf/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/stats-base-dists-negative-binomial-logpmf?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/stats-base-dists-negative-binomial-logpmf.svg
[dependencies-url]: https://david-dm.org/stdlib-js/stats-base-dists-negative-binomial-logpmf/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/stats-base-dists-negative-binomial-logpmf/tree/deno
[deno-readme]: https://github.com/stdlib-js/stats-base-dists-negative-binomial-logpmf/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/stats-base-dists-negative-binomial-logpmf/tree/umd
[umd-readme]: https://github.com/stdlib-js/stats-base-dists-negative-binomial-logpmf/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/stats-base-dists-negative-binomial-logpmf/tree/esm
[esm-readme]: https://github.com/stdlib-js/stats-base-dists-negative-binomial-logpmf/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/stats-base-dists-negative-binomial-logpmf/blob/main/branches.md

[negative-binomial-mixture-representation]: https://en.wikipedia.org/wiki/Negative_binomial_distribution#Gamma.E2.80.93Poisson_mixture

[negative-binomial-distribution]: https://en.wikipedia.org/wiki/Negative_binomial_distribution

[pmf]: https://en.wikipedia.org/wiki/Probability_mass_function

</section>

<!-- /.links -->
