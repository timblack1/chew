import { LitElement, html, css } from 'lit';

export class ThermalPanel extends LitElement {
  static properties = {
    manufacturer: { type: String },
    supplier: { type: Object },
    type: { type: String },
    // Physical
    height: { type: Number },
    width: { type: Number },
    depth: { type: Number },
    weight: { type: Number },
    // Thermal
    wattsCollectedPerDegreeDelta: { type: Number },
    inputTemperature: { type: Number },
    outputTemperature: { type: Number },
    degreeDelta: { type: Number },
    // Sensors
  };

  static styles = css`
    :host {
    }

    main {
    }
  `;

  constructor() {
    super();
    this.properties = {
      supplier: {
        cost: 0,
        name: '',
        url: '',
      },
    };
  }

  render() {
    return html` <main></main> `;
  }
}

customElements.define('thermal-panel', ThermalPanel);
