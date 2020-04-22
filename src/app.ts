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
    const date = new Date();
    document.querySelector('#app-title').innerHTML = `${date.getFullYear()}년 ${
      date.getMonth() + 1
    }월 ${date.getDate()}일`;

    this.todoList = new TodoList(todoItems, (id) => {
      console.log('id id ', id);
      todoItems[id].isComplete = !todoItems[id].isComplete;

      this.setState(todoItems);
    });
  }

  setState(newItems) {
    this.todoList.setState(newItems);
  }
}

new app();
