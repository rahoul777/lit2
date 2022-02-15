import {LitElement, html} from 'lit';
import {customElement, property} from 'lit/decorators.js';

@customElement('repeat-element')
class RepeatElement extends LitElement {

    @property() list = ['Peas', 'Carrots', 'Tomatoes'];
    
    render() {
        return html`
        <h3>:== Render a list ==:</h3>
        <ul>
        ${this.list.map(
          (item, index) =>
            html`
              <li>${index}: ${item}</li>
            `
        )}
      </ul>
        `;
    }
}
