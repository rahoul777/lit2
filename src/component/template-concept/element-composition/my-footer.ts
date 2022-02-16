import {LitElement, html, css} from 'lit';
import {customElement} from 'lit/decorators.js';

@customElement('my-footer')
class MyFooter extends LitElement {
    static styles =
    css`
      footer {
      	display: flex;
      	justify-content: center;
        font-family: Manrope, sans-serif;
      }
    `;

    render() {
        return html`
        <footer><p>THE END</p></footer>
        `;
    }
}
