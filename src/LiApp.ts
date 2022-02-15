import { LitElement, html, css } from 'lit';
import { property } from 'lit/decorators.js';

import './component/my-element.js';
import './component/full-component.js';
import './component/reactive-properties.js';
import './component/change-detection/date-picker-element.js';

const logo = new URL('../../assets/open-wc-logo.svg', import.meta.url).href;

export class LiApp extends LitElement {
  @property({ type: String }) title = 'My app Hello';

  static styles = css`
    :host {
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;
      font-size: calc(10px + 2vmin);
      color: #1a2b42;
      max-width: 960px;
      margin: 0 auto;
      text-align: center;
      background-color: var(--li-app-background-color);
    }

    main {
      flex-grow: 1;
    }

    .logo {
      margin-top: 36px;
      animation: app-logo-spin infinite 20s linear;
    }

    @keyframes app-logo-spin {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(360deg);
      }
    }

    .app-footer {
      font-size: calc(12px + 0.5vmin);
      align-items: center;
    }

    .app-footer a {
      margin-left: 5px;
    }
    hr {
      width: 100%;
    }
    .mars {
      --planet-color: red;
    }
  `;

  render() {
    return html`
      <main>
        <div class="logo"><img alt="open-wc logo" src=${logo} /></div>
        <h1>${this.title}</h1>

        <p>Edit <code>src/LiApp.ts</code> and save to reload.</p>
        <a
          class="app-link"
          href="https://open-wc.org/guides/developing-components/code-examples"
          target="_blank"
          rel="noopener noreferrer"
        >
          Code examples
        </a>
      </main>
      <hr>
      <my-element></my-element>
      <hr>
      <full-component></full-component>
      <hr>
      <full-component class="mars" planet="Mars"></full-component>
      <hr>
      <name-tag name="statically initialized"></name-tag>
      <hr>
      <date-picker-element></date-picker-element>
      <p class="app-footer">
        🚽 Made with love by
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/open-wc"
          >open-wc</a
        >.
      </p>
    `;
  }
}