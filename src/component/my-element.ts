import {LitElement, html} from 'lit';
import {customElement, property} from 'lit/decorators.js';

@customElement('my-element')
class MyElement extends LitElement {
  @property()
  version = 'STARTING';
  name = 'World!'

  render() {
    return html`
    <h3>:== Hello World Example ==:</h3>
    <p>Welcome to the Lit tutorial!</p>
    <p>This is the ${this.version} code.</p>
    <p>Hello, ${this.name}!</p>
    `;
  }
}