import { LitElement, html, css } from "lit";
import { customElement, property } from 'lit/decorators.js';
import { localDateFromUTC } from '../../utils/date-utils.js';
import './date-display.js';

@customElement('date-picker-element')
class DatePickerElement extends LitElement {
    @property() date?: Date;

    static styles = css`
        p {
            font-style: Italic;
        }
    `;

    render() {
        return html`
        <h3>:== Change Detection Example ==:</h3>
        <p>Choose a date: <input type="date" @change="${this._dateChanged}"></p>
        <p><button @click="${this._chooseToday}">Choose Today</button></p>
        <p>Date Choosen: <date-display .date="${this.date}"></date-display></p>
        `;
    }

    _dateChanged(e: Event) {
        const utcDate = (e.target as HTMLInputElement).valueAsDate;
        if (utcDate) {
            this.date = localDateFromUTC(utcDate);
        }
    }

    _chooseToday() {
        this.date = new Date();
    }
}