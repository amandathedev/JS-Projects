let myBook = {
    title: 'Slaughterhouse-Five',
    author: 'Kurt Vonnegut',
    pageCount: 215
}

// Template string
console.log(`${myBook.title} by ${myBook.author}`)

myBook.title = 'Player Piano'

console.log(`${myBook.title} by ${myBook.author}`)

let person = {
    name: 'Amanda',
    age: 29,
    location: 'Chicago'
}

console.log(`${person.name} is ${person.age} years old and lives in ${person.location}.`)

person.location = 'Chiang Mai'

console.log(`${person.name} is ${person.age} years old and lives in ${person.location}.`)