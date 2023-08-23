import { LitElement, html, css } from 'lit';

export class PanelArray extends LitElement {
  static properties = {
    // Physical
    height: { type: Number },
    width: { type: Number },
    depth: { type: Number },
    weight: { type: Number },
    // Logical
    series: { type: Number },
    parallel: { type: Number },
    totalCrossTied: { type: Boolean },
    // Electrical
    watts: { type: Number },
    voc: { type: Number },
    isc: { type: Number },
    vmp: { type: Number },
    imp: { type: Number },
    // Optical
    percentShading: { type: Number },
  };

  static styles = css`
    :host {
    }

    main {
    }
  `;

  constructor() {
    super();
    this.properties = {};
  }

  render() {
    return html` <main></main> `;
  }
}

customElements.define('panel-array', PanelArray);
