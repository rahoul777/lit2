import {LitElement, html} from 'lit';
import {customElement, property} from 'lit/decorators.js';

@customElement('conditional-template')
export class ConditionalTemplate extends LitElement {
    @property() condition = true;
    render() {
        return html`
            <h3>:== Render content conditionally ==:</h3>
            ${this.condition ? html`<p>Render some HTML if condition is true.</p>` : html`
            <p>Render some other HTML if condition is false.</p>`}
            <button @click=${() => {this.condition = !this.condition}}>Toggle condition</button>
        `;
    }
}
