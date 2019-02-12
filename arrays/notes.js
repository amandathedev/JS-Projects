const todo = [
  {
    text: "Buy new kettle",
    completed: false
  },
  {
    text: "Call doctor",
    completed: true
  },
  {
    text: "Get oil change",
    completed: false
  },
  {
    text: "Hang pictures",
    completed: true
  },
  {
    text: "Call mom",
    completed: true
  }
];

const deleteTodo = function(todo, todoText) {
  const index = todo.findIndex(function(todo) {
    return todo.text.toLowerCase() === todoText.toLowerCase();
  });

  if (index > -1) {
    todo.splice(index, 1);
  }
};

// console.log(notes.length);
// console.log(notes[2]);
