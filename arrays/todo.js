const todos = [
  "Get stamps",
  "Clean office",
  "Buy table",
  "Read book",
  "Make dinner"
];

console.log(`You have ${todos.length} things to do!`);
console.log(`To do: ${todos[0]}`);
console.log(`To do: ${todos[todos.length - 2]}`);

todos.forEach(function(todo, index) {
    const num = index + 1
    console.log(`${num}. ${todo}`)
});

for (let count = 0; count < todos.length; count++) {
    const num = count + 1
    const todo = todos[count]
    console.log(`${num}. ${todo}`)
}