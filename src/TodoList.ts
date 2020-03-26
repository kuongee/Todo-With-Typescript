interface Item {
  content: string;
  isComplete: boolean;
}

export default class TodoList {
  todoItems: Array<Item>;

  constructor(items: Array<Item>) {
    this.todoItems = items;
    this.render();
  }

  render() {
    document.querySelector("#todo-list").innerHTML = this.todoItems
      .map(item =>
        item.isComplete
          ? `<div><s> ☆${item.content} </s></div>`
          : `<div> ☆${item.content} </div>`
      )
      .join("");
  }

  setState(newItems) {
    this.todoItems = newItems;
    this.render();
  }
}
