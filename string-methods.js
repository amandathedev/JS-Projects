let name = ' Amanda Treutler '

// Length property
console.log(name.length)

// Convert to upper case
console.log(name.toUpperCase())

// Convert to lower case
console.log(name.toLowerCase())

// 'Includes' method -- Search for a string within a string
let password = 'abc123password098'
console.log(password.includes('password'))

// Trim -- Remove extra whitespace (e.g. spaces) from a string
console.log(name.trim())

// Can remove if and else with the same result. See video https://www.udemy.com/modern-javascript/learn/v4/t/lecture/9862334?start=0
let isValidPassword = function (password) {
    if (password.length > 8 && !password.includes('password')) {
        return true
    } else {
        return false
    }
}

console.log(isValidPassword('abcde'))
console.log(isValidPassword('ahgbcde123!@#'))
console.log(isValidPassword('password123!@#'))