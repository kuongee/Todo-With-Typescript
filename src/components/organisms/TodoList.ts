import ItemLabel from '../molecules/ItemLabel';

export interface Item {
  content: string;
  isComplete: boolean;
}

export class TodoList {
  todoItems: Array<Item>;

  constructor(items: Array<Item>, handleToggle) {
    this.todoItems = items;
    document
      .querySelector('#app-todo-list')
      .addEventListener('click', e =>
        handleToggle(((e.target as HTMLElement).parentNode as HTMLElement).id)
      );

    this.render();
  }

  render() {
    document.querySelector('#app-todo-list').innerHTML = this.todoItems
      .map((item, index) =>
        ItemLabel({
          index,
          content: `${item.content}`,
          isStrike: item.isComplete
        })
      )
      .join('');
  }

  setState(newItems) {
    this.todoItems = newItems;
    this.render();
  }
}
