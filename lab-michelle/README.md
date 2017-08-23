# Lab 2
This lab asked us to create and test several stand alone functions using .map, .filter, .reduce, .concat, .splice methods in JS. We needed to use ES6 lexical arrow notation for the functions. In addition to testing using TDD, we needed to try to test for some edge cases. Entry point for this project was index.js. 

## How I set up my tests:
In general, the first test for each method uses normal values that should pass. The second test uses a mix of values that the test should accept/not accept, for example, mixing booleans into a function that should only take strings. In my third test, I tried to come up with more obscure holes in functionality using negative numbers, Infinity, undefined, NaN, etc - basically anything in JS that could potentially make things confusing - and made sure that the test expected to fail.


create a CLI (index.js) that will use your new map function to uppercase all command line arguments and print them to the screen: 1pt
hint: - you'll want to check out the process object (and it's methods) to get an array of provided command line arguments
test your CLI: 1pt
