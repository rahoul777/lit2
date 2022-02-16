import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

import './my-header.js';
import './my-footer.js';
import './my-article.js';

@customElement('my-page')
class MyPage extends LitElement {
    static styles = css`
        
    `;
    render() {
        return html`
        <div>
            <h3>:== Element Composition ==:</h3>
            <my-header></my-header>
            <my-article></my-article>
            <my-footer></my-footer>
        </div>
        `;
    }
}