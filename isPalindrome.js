// Write a function that takes in a single word. 
// Return ``true`` if this word is a palindrome. ``false`` 
// if it is not. A palindrome is a word that is spelled the 
// same backwards and forwards.

// For example:

//   isPalindrome("a")
//   // returns true

//   isPalindrome("noon")
//   // returns true

//   isPalindrome("hello")
//   // returns false

// Treat spaces and uppercase letters normally—so “Racecar” wouldn’t be a palindrome since “R” and “r” aren’t the same letter:

//   isPalindrome("Racecar")
//   // returns false

//   isPalindrome("racecar")
//   // returns true

function isPalindrome(word) {
    // it should be word.length
    let j = words.length - 1
    for (let i = 0; i < (word.length - 1) / 2; i++) {
        if (word[i] !== word[j]) {
            return false
        }
        j--
    }
    return true
}

const result = isPalindrome('racecar')

console.log(result)