# Overview

## Description

The following code was written in JavaScript, and tested with Mocha/Chai.

# Instructions

### Installation

To install the necessary dependencies, run `npm i`.

### Testing

To run all test specs, run `npm test`.

### Animation.js

#### Prompt

A collection of particles is contained in a linear chamber. They all have the same speed,
but some are headed toward the right and others are headed toward the left. These
particles can pass through each other without disturbing the motion of the particles, so
all the particles will leave the chamber relatively quickly.
You will be given the initial conditions by a string 'init' containing at each position an 'L'
for a leftward moving particle, an 'R' for a rightward moving particle, or a '.' for an empty
location. 'init' shows all the positions in the chamber. Initially, no location in the chamber
contains two particles passing through each other.
We would like an animation of the particles as they move. At each unit of time, we want
a string showing occupied locations with an 'X' and unoccupied locations with a '.'.
Create a method 'animate' that takes a positive integer 'speed' and a string 'init' giving
the initial conditions. The speed is the number of positions each particle moves in one
unit of time. The method will return an array of strings in which each successive element
shows the occupied locations at each time step. The first element of the return should show the occupied locations at the initial instant (at time = 0) in the 'X', '.' format. The
last element in the return should show the empty chamber at the first time that it
becomes empty.

#### Example

`animate(2, "..R....")` should return:

`[`
`"..X....",`
`"....X..",`
`"......X",`
`"......."`
`]`

### missingLetters.js

#### Prompt

The sentence "A quick brown fox jumps over the lazy dog" contains every single letter in
the alphabet. Such sentences are called pangrams. You are to write a method
getMissingLetters, which takes as input a string containing a sentence and returns all
the letters not present at all in the sentence (i.e., the letters that prevent it from being a
pangram). You should ignore the case of the letters in sentence, and your return should
be all lower case letters, in alphabetical order. You should also ignore all non­alphabet
characters as well as all non­US­ASCII characters.

#### Example

1.
`getMissingLetters("A quick brown fox jumps over the lazy dog")` should return:

`""`

2.
`getMissingLetters("A slow yellow fox crawls under the proactive dog")` should return:

`"bjkmqz"`
