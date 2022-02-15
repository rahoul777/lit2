import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("full-component")
class FullComponent extends LitElement {
    static styles = css`
     :host span {
        display: inline-block;
        padding: 10px;
        background: lightgray;
        cursor: pointer;
     }
     .planet {
        color: var(--planet-color, blue);
      }
    `;
    @property() greeting = "Hello";
    @property() planet = "World";

    render() {
        return html`
        <h3>:== Full Component Example ==:</h3>
        <span @click="${this.togglePlanet}">${this.greeting}
            <span  class="planet">${this.planet}</span>
        </span>
        `;
    }

    togglePlanet() {
        this.planet = this.planet === "World" ? "Mars" : "World";
    }
}