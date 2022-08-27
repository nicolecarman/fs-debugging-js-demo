// Given the starting code of:

const x = 1
const y = 1

// Write a block of code that will print out the largest value.

// Using the given values as an example, your code should print out "2".

// To verify your code is working properly, try and change the values of "x" and "y".

// As an additional challenge, print out "The values are identical." if "x" and "y" have the same value.

if (x > y) {
    console.log(x)
} else if (y > x) {
    console.log(y)
    // there's an unnecessary set of parentheses (line 19 and 21)
} else ({
    console.log('The values are identical.')
})