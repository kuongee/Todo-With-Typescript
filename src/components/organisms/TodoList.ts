import ItemLabel from '../molecules/ItemLabel';
import Button from '../atoms/button/Button';
import constants from '../../constants/index';

export interface Item {
  content: string;
  isComplete: boolean;
}

export class TodoList {
  todoItems: Array<Item>;
  handleClickX: (string) => {};

  constructor({ items, handleToggle, handleClickX }) {
    this.todoItems = items;
    this.handleClickX = handleClickX;
    document.querySelector('#app-todo-list').addEventListener('click', e => {
      const target = e.target as HTMLElement;
      if (target.nodeName === 'SPAN' || target.nodeName === 'S') {
        handleToggle((target.parentNode as HTMLElement).id);
      }
    });

    this.render();
  }

  render() {
    const appTodoList = document.querySelector('#app-todo-list');
    appTodoList.innerHTML = '';

    this.todoItems.forEach((item, index) => {
      const itemDiv = document.createElement('DIV');
      itemDiv.appendChild(
        ItemLabel({
          index,
          content: `${item.content}`,
          isStrike: item.isComplete
        })
      );

      itemDiv.appendChild(
        Button({
          content: 'X',
          size: constants.SIZE.SMALL,
          onClick: () => this.handleClickX(index)
        })
      );

      appTodoList.append(itemDiv);
    });

    // document
    //   .querySelector('#app-todo-list')
    //   .replaceChild(newList, document.querySelector('#app-todo-list').firstChild);

    // document.querySelector('#app-todo-list').innerHTML = this.todoItems
    //   .map((item, index) =>
    //     ItemLabel({
    //       index,
    //       content: `${item.content}`,
    //       isStrike: item.isComplete
    //     })
    //   )
    //   .join('');
  }

  setState(newItems) {
    this.todoItems = newItems;
    this.render();
  }
}
