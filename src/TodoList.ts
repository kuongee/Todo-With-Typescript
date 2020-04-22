import Label from './components/label/Label';

interface Item {
  content: string;
  isComplete: boolean;
}

export default class TodoList {
  todoItems: Array<Item>;

  constructor(items: Array<Item>, handleToggle) {
    this.todoItems = items;
    document
      .querySelector('#todo-list')
      .addEventListener('click', e =>
        handleToggle(((e.target as HTMLElement).parentNode as HTMLElement).id)
      );

    this.render();
  }

  render() {
    document.querySelector(
      '#todo-list'
    ).innerHTML = this.todoItems
      .map((item, index) =>
        item.isComplete
          ? `<div id="${index}"><s> ☆${item.content} </s></div>`
          : `<div id="${index}">${Label(`☆${item.content}`)}</div>`
      )
      .join('');
  }

  setState(newItems) {
    this.todoItems = newItems;
    this.render();
  }
}
