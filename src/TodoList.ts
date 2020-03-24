interface Item {
    content: string;
}

export default class TodoList {
    todoItems: Array<Item>;

    constructor(items: Array<Item>) {
        this.todoItems = items;
        this.render();
    }

    render() {
        document.querySelector("#todo-list").innerHTML = this.todoItems.map(item => `<div> ☆${item.content} </div>`).join("");
    }
}
