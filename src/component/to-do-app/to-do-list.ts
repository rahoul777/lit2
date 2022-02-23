import {LitElement, html, css} from 'lit';
import {customElement, property, query} from 'lit/decorators.js';

type ToDoItem = {
    text: string,
    completed: boolean
}

@customElement('todo-list')
export class ToDoList extends LitElement {
    @property({attribute: false})
    listItems = [
        { text: 'Make to-do list', completed: true },
        { text: 'Add some styles', completed: false }
    ];

    @query('#newitem')
    input!: HTMLInputElement;

    render() {
        return html`
        <h3>:== To Do ==:</h3>
        <ul>
        ${this.listItems.map((item) => html`
        <li>${item.text}</li>
        `)}
        </ul>
        <input id="newitem" aria-label="New item">
        <button @click=${this.addToDo}>Add</button>
        `;
    }

    addToDo() {
        if (this.input.value) {
            this.listItems.push({text: this.input.value, completed: false});
            this.input.value = '';
            this.requestUpdate();
        }
    }
}
