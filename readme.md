# Random Number JS

![npm version](https://img.shields.io/npm/v/@aspiesoft/random-number-js)
![GitHub top language](https://img.shields.io/github/languages/top/aspiesoft/random-number-js)
![GitHub license](https://img.shields.io/github/license/aspiesoft/random-number-js)

![npm downloads](https://img.shields.io/npm/dw/@aspiesoft/random-number-js)
![npm downloads](https://img.shields.io/npm/dm/@aspiesoft/random-number-js)
![jsDelivr hits (GitHub)](https://img.shields.io/jsdelivr/gh/hm/aspiesoft/random-number-js)

[![paypal](https://img.shields.io/badge/buy%20me%20a%20coffee-paypal-blue)](https://buymeacoffee.aspiesoft.com/)

## Generate random numbers with more variety

JavaScript's Math.random() function tends to generate the same number at times.
This random() function has a low chance of returning the same number twice, but still maintains that chance.

JavaScript's Math.random() returns a decimal, which you would then multiply by 10, 100, 1000, ect and then floor.
This random() allows you to pass parameters for minimum and maximum number result, and still get a nice and random result.

This function also runs fast, and uses the time in milliseconds to help add variety to its random results.
The function, also (optionally, true by default) keeps track of recent random results, and tries to avoid repeating them, but does so randomly.
The functions memory for recent random numbers is also cleared on a 1 second interval by default, and can be changed (or disabled) with a function as shown below.

## Installation

### node.js

```shell script

npm install @aspiesoft/random-number-js

```

### cdn

```html

<script src="https://cdn.jsdelivr.net/gh/AspieSoft/random-number-js/script.min.js"></script>

```

## Usage

```JavaScript

// require only if using node.js
const random = require('@aspiesoft/random-number-js');


random(); // output: (25) random number between 0 and 100

random(10, 50); // output: (42) random number between 10 and 50

random(-50, 50, 2); // output: (23.02, -45.53, 2.5) random number between -50 and 50

random(0, 100, -1); // output: random number with a random decimal size between 0 and 10

// optional enable lite mode (false by default)
// changes the default option, and can be (optionally) overwritten by the function
random.setLiteMode(true || false); // default: true (default for function attr, Not for the option)
// be default, the random function remembers past results for 1 second, and avoids repeating them.
// setting lite mode disables this feature, and reduces memory usage.
// the numbers will still often have variety, but with a higher chance of repeats

// change the interval for clearing previous results
result.setClearInterval(1000); // default: 1000 (1000 milliseconds = 1 second)
result.setClearInterval(0); // disable interval

random(
  "<insert minimum value>", // default: 0
  "<insert maximum value>", // default: 100
  "<insert decimal size>", // default: 0
  // individually set lite mode for current function
  true || false, // default: null (uses default option)
);

```
