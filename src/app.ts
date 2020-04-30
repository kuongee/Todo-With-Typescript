import { Item, TodoList } from './components/organisms/TodoList';
import TodoInput from './components/organisms/TodoInput';

const todoItems = [
  {
    content: 'Typescript 공부',
    isComplete: false
  },
  {
    content: 'todo 만들기',
    isComplete: false
  }
];

export default class app {
  todoItemList: Array<Item>;
  todoList: TodoList;
  todoInput: TodoInput;
  date: Date;

  constructor() {
    this.todoItemList = todoItems;

    this.date = new Date(); // Get Today Date
    document.querySelector('#app-title').innerHTML = `${this.date.getFullYear()}년 ${
      this.date.getMonth() + 1
    }월 ${this.date.getDate()}일`;

    // Render Todo List
    this.todoList = new TodoList({
      items: this.todoItemList,
      handleToggle: id => {
        if (id) {
          this.todoItemList[id].isComplete = !this.todoItemList[id].isComplete;
          this.setState(this.todoItemList);
        }
      },
      handleClickX: id => {
        const newItems = [...this.todoItemList];
        newItems.splice(id, 1);
        this.setState(newItems);
      }
    });

    this.todoInput = new TodoInput(value => {
      this.setState([...this.todoItemList, { content: value, isComplete: false }]);
    });
  }

  setState(newItems) {
    this.todoList.setState(newItems);
    this.todoItemList = newItems;
  }
}

new app();
