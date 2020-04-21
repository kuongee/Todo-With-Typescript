import 'bulma/css/bulma.css';
import TodoList from './TodoList';

const todoItems = [
  {
    content: 'Typescript 공부',
    isComplete: false,
  },
  {
    content: 'todo 만들기',
    isComplete: false,
  },
];

export default class app {
  todoList: TodoList;

  constructor() {
    this.todoList = new TodoList(todoItems, (id) => {
      todoItems[id].isComplete = !todoItems[id].isComplete;

      this.setState(todoItems);
    });
  }

  setState(newItems) {
    this.todoList.setState(newItems);
  }
}

new app();
