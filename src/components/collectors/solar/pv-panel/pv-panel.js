import { LitElement, html, css } from 'lit';

export class PvPanel extends LitElement {
  static properties = {
    base: { type: Object },
    temperature: { type: Number },
    // Optical
    irradiance: { type: Number },
    angleOfIncidence: { type: Number },
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
    this.base = {
      manufacturer: '',
      supplier: {
        cost: 0,
        name: '',
        url: '',
      },
      type: '',
      modelNumber: '',
      // Physical
      height: 0,
      width: 0,
      depth: 0,
      weight: 0,
      // Electrical
      maximumPower: 0,
      openCircuitVoltage: 0,
      isc: 0,
      vmp: 0,
      imp: 0,
      ptc: 0,
      internalResistance: 0,
      // Thermal
      tnoct: 0,
      temperatureGainPerWattIrradiance: 0,
      // See https://www.solar.com/learn/does-solar-panel-temperature-coefficient-matter/
      tcoeff: 0,
    };
  }

  render() {
    return html` <main></main> `;
  }
}

customElements.define('pv-panel', PvPanel);
