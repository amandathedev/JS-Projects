let getTip = function (total, tipPercent = .2) {
    return total * tipPercent
}

let tip = getTip(100)
console.log(tip)