import { LitElement, html} from "lit";
import {customElement, property} from 'lit/decorators.js';

@customElement('custom-converter')
class CustomConverter extends LitElement {
    @property({
        converter: (attrValue: string | null) => {
            if (attrValue) {
                return new Date(attrValue);
            } else {
                return undefined;
            }
        }
    }) date?: Date;

    render() {
        return html`<h3>:== Converter Example ==:</h3>
            ${this.date ? html`
            <p>Date is:
                <span id="dateField">${this.date.toLocaleDateString()}</span>
            </p>` : 'No date set'
            }
        `;
    }
}