import { LitElement, html, PropertyValues } from "lit";
import { customElement, property, query } from 'lit/decorators.js';
import { isSameDate } from '../../utils/date-utils.js';

@customElement('date-display')
export class DateDisplay extends LitElement {
    @property({
        hasChanged: (value?: Date, oldValue?: Date) => {
            // @ts-ignore
            return !isSameDate(value, oldValue);
        }
    }) date?: Date | undefined;

    @query('#dateField') dateField!: HTMLSpanElement;

    frames = [
        {backgroundColor: '#fff'},
        {backgroundColor: '#324fff' },
        {backgroundColor: '#fff'}
    ];

    render() {
        return html`<span id="dateField">${this.date?.toLocaleDateString()}</span>`;
    }

    updated(changed: PropertyValues<this>) {
        if (changed.has('date')) {
            this.dateField.animate(this.frames, 1000);
        }
    }

}