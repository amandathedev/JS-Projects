// Global scope
    // Local scope

let fahrenheitToCelsius = function(Ftemp) {
    let celsius = (Ftemp - 32) * 5 / 9

    if (celsius <= 0) {
        
    }

    return celsius
}

let temp1 = fahrenheitToCelsius(32)
let temp2 = fahrenheitToCelsius(68)

console.log(temp1)
console.log(temp2)