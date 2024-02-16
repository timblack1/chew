import { html, css } from 'lit';
import { PvPanel } from './pv-panel.js';

export class TrinaSolar240WPanel extends PvPanel {
  static styles = css`
    :host {
    }

    main {
    }
  `;

  constructor() {
    super();
    this.base = {
      manufacturer: 'Trina Solar',
      supplier: {
        cost: 0,
        name: 'Santan Solar',
        url: '',
      },
      type: '',
      modelNumber: 'SS240P-60',
      // Physical
      height: 0,
      width: 0,
      depth: 0,
      weight: 0,
      // Electrical
      maximumPower: 240,
      // VOC
      // TODO: Verify whether this figure is correct by looking at another panel's sticker
      openCircuitVoltage: 37.2,
      voltageAtPmax: 30.4,
      shortCircuitCurrent: 8.37,
      currentAtPmax: 7.89,
      maxSystemVoltage: 600,
      fuseRatingAmps: 15,
      // TODO: Add the above to the base class
      // TODO: Do we need these values?
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
