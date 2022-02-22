import {LitElement, html} from 'lit';
import {customElement, state} from 'lit/decorators.js';
import {until} from 'lit/directives/until.js';

const fetchData = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/2');
    const json = await response.json();
    // Add some delay for demo purposes
    await new Promise<void>((r) => setTimeout(() => r(), 5000));
    return json.title;
}

@customElement('until-dir')
class UntilDir extends LitElement {
    @state()
    private content: Promise<string> = fetchData();

    render() {
        return html`
        <h3>:== until directive example ==:</h3>
        ${until(this.content, html`<span>Please wait Loading...</span>`)}
        `;
    }
}
