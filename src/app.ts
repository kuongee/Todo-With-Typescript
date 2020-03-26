import TodoList from "./TodoList";

const todoItems = [
  {
    content: "Typescript 공부",
    isComplete: false
  },
  {
    content: "todo 만들기",
    isComplete: false
  }
];

const todolist = new TodoList(todoItems);

const newTodoItems = [
  {
    content: "Typescript 공부",
    isComplete: false
  },
  {
    content: "todo 만들기",
    isComplete: true
  }
];

todolist.setState(newTodoItems);
