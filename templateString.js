let getTip = function (total, tipPercent = .2) {
    let percent = tipPercent * 100
    let tip = total * tipPercent
    return `A ${percent}% tip on $${total} would be $${tip}`
    // return `A ${tipPercent * 100}% tip on $${total} would be $${total * tipPercent}`
}

let tip = getTip(50, .15)
console.log(tip)