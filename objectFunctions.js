let myBook = {
    title: 'Slaughterhouse-Five',
    author: 'Kurt Vonnegut',
    pageCount: 215
}

let otherBook = {
    title: 'Infinite Jest',
    author: 'David Foster Wallace',
    pageCount: 1079
}

let getSummary = function (book) {
    return {
        summary: `${book.title} by ${book.author}`,
        pageCountSummary: `${book.title} is ${book.pageCount} pages long.`
    }
}

let bookSummary = getSummary(myBook)
let otherBookSummary = getSummary(otherBook)

console.log(bookSummary.pageCountSummary)
console.log(otherBookSummary.pageCountSummary)

let convertFahrenheit = function (fahrenheit) {
    return {
        fahrenheit: fahrenheit,
        kelvin: (fahrenheit + 459.67) * (5/9),
        celsius: (fahrenheit - 32) * (5/9)
    }
}

let temps = convertFahrenheit(74)
console.log(temps)