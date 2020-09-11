# Random Number JS

[![paypal](https://img.shields.io/badge/buy%20me%20a%20coffee-paypal-blue)](https://buymeacoffee.aspiesoft.com/)

A JavaScript CDN To Generate Better Random numbers.
JavaScript's Math.random() function tends to generate the same number at times.
This random() function has a low chance of returning the same number twice, but still maintains that chance.

JavaScript's Math.random() returns a decimal, which you would then multiply by 10, 100, 1000, ect and then floor.
This random() allows you to pass parameters for minimum and maximum number result, and still get a nice and random result.

This function also runs fast, and uses the time in milliseconds to help add variety to its random results.
The function, also keeps track of recent random results, and tries to avoid repeating them, but does so randomly.
The functions memory for recent random numbers is also cleared on a 10 second interval.

## Installation

```html

<script src="https://cdn.jsdelivr.net/gh/AspieSoft/random-number-js/script.min.js"></script>

```

## Usage

```JavaScript

random(); // output: (25) random number between 0 and 100

random(10, 50); // output: (42) random number between 10 and 50

random(-50, 50, 2); // output: (23.02, -45.53, 2.5) random number between -50 and 50

random(0, 100, -1); // output: random number with a random decimal size between 0 and 10

random(
  "<insert minimum value>", // default: 0
  "<insert maximum value>", // default: 100
  "<insert decimal size>", // default: 0
);

```
