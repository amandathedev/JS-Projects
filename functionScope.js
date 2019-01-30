// Global scope
    // Local scope
        // Local scope (isFreezing)

let fahrenheitToCelsius = function(Ftemp) {
    let celsius = (Ftemp - 32) * 5 / 9

    if (celsius <= 0) {
        let isFreezing = true
    }

    return celsius
}

let temp1 = fahrenheitToCelsius(32)
let temp2 = fahrenheitToCelsius(68)

console.log(temp1)
console.log(temp2)