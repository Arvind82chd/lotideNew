# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @arvind.sharma/lotide`

**Require it:**

`const _ = require('@arvind.sharma/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head(...)`: It takes in an array and returns its head.
* `tail(...)`: It takes in an array and returns its tail array.
* `middle(...)`: It takes in an array and returns its middle values.
* `assertArrayEqual(...)`: It asserts the equality of two arrays.
* `assertEqual(...)`: It asserts the equality of two primitive values.
* `assertObjectsEqual(...)`: It asserts the equality of two objects.
* `countLetters(...)`: It takes in a string and returns an object with keys as letters and values and number of times it repeated in string
* `countOnly(...)`: It takes in an array and an object then matches both of them and returns only the matched ones as an object.
* `eqArrays(...)`: It checks if two given arrays are equal or not.
* `eqObjects(...)`: It checks and returns if two given objects are equal or not.
* `findKey(...)`: It takes in an object and a callback function, returning the key from object when the callback is executed.
* `findKeyByValue(...)`: It takes in an object and a value returning the key after scanning and matching the given value.
* `flatten(...)`: description
* `letterPositions(...)`: It inputs a string and returns an object with the letter in string and its position as key-value pair.
* `map(...)`: It maps the input array and callback function returning an array as per the callback.
* `takeUntil(...)`: It takes in an array and a callback returning an new array from previous, which stops taking any further values ones the callback is executed.
* `without(...)`: Takes in two arrays and returns an array without the values from the reference one.
* `recursiveEqArrays(...)`: Takes in two arrays and returns true or false if they are equal or not respectively using recurssion.
* `Subsequent tests(...)`: It also contains six diffrent types of tests for specific functions only, including use of mocha and chai.
