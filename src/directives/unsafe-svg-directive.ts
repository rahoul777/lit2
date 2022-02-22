import {LitElement, html} from 'lit';
import {customElement} from 'lit/decorators.js';
import {unsafeSVG} from 'lit/directives/unsafe-svg.js';

const svg = '<circle cx="50" cy="50" r="40" stroke="green" stroke-width="4" fill="yellow" />';

@customElement('unsafe-svg-dir')
class UnsafeSvgDir extends LitElement {
    render() {
        return html`
        <h3>:== unsafeSVG directive example ==:</h3>
        Look out, potentially unsafe SVG ahead:<br>
        <svg width="100" height="100" viewBox="0 0 100 100"
            xmlns="http://www.w3.org/2000/svg" version="1.1">
            ${unsafeSVG(svg)}
        </svg>
        `;
    }
}
