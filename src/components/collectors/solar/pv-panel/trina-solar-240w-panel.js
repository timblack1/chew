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
      manufacturer: {
        name: 'Trina Solar',
        url: 'https://www.trinasolar.com/us',
        modelNumber: 'TSM-240PA05.08',
      },
      supplier: {
        // In dollars
        // TODO: Verify from Quicken
        cost: 40,
        name: 'Santan Solar',
        url: '',
        modelNumber: 'SS240P-60',
      },
      type: '',

      specSheet:
        'https://static.trinasolar.com/sites/default/files/PC05_Datasheet_40mm_EN.pdf',

      maxSnowLoadPa: 5400,
      maxWindLoadPa: 2400,

      // Electrical @ STC
      // Values at Standard Test Conditions STC (Air Mass AM1.5, irradiance 1000W/m², Cell Temperature 25°C).
      // Power measurement tolerance: ±3%
      electricalSTC: {
        // Peak power watts
        pmax: 240,
        // Open circuit voltage
        voc: 37.2,
        // Maximum power voltage
        vmp: 30.4,
        // Short circuit current
        isc: 8.37,
        // Maximum power current
        imp: 7.89,
        // Module efficiency
        efficiency: 14.7,
        maxSystemVoltage: 600,
        // Maximum series fuse rating
        fuseRatingAmps: 15,
        internalResistance: 0,
        // Thermal
        tnoct: 0,
        temperatureGainPerWattIrradiance: 0,
        // See https://www.solar.com/learn/does-solar-panel-temperature-coefficient-matter/
        tcoeff: 0,
      },

      // Electrical @ NOCT
      // NOCT: irradiance at 800W/m², Ambient Temperature 20°C, Wind Speed 1m/s.
      // Power measurement tolerance: ±3%
      electricalNOCT: {
        // Maximum power, watts
        pmax: 174,
        // Maximum power voltage
        vmp: 26.6,
        // Maximum power current
        imp: 6.55,
        // Open circuit voltage
        voc: 34.1,
        // Short circuit current
        isc: 7.04,
      },

      // Mechanical
      mechanical: {
        // Cell type
        cellType: 'Polycrystalline',
        // Number of cells
        cellCount: 60, // 6x10
        // Cell dimensions
        cellDimensions: {
          width: 156,
          height: 156,
        },
        moduleDimensions: {
          // In millimeters
          // See spec sheet for precise installing, grounding, drain hole locations
          width: 812,
          height: 992,
          depth: 35,
          frameWidth: 35,
        },
        // In kilograms
        weight: 18.6,
        // Glass type
        glassType: 'High transparency solar glass 3.2mm (0.13 inches)',
        // Frame type
        frameType: 'Anodized aluminum alloy',
        // Junction box
        junctionBox: {
          // Protection class
          protectionClass: 'IP65',
          // Cables
          cables: {
            // Cable cross section, in millimeters
            crossSection: 4,
            // Cable length
            length: 1000, // +- 10
          },
          // Connector type
          connectorType: 'MC4',
        },
      },

      // Temperature ratings
      temperature: {
        // Nominal operating cell temperature
        noct: 45,
        // Temperature coefficient of Pmax, %/°C
        pmax: -0.43,
        // Temperature coefficient of Voc, %/°C
        voc: -0.32,
        // Temperature coefficient of Isc, %/°C
        isc: 0.047,
      },

      // Maximum ratings
      maxRatings: {
        // Operating temperature, C
        operatingTemperature: {
          min: -40,
          max: 85,
        },
        // Maximum system voltage
        maxSystemVoltage: {
          // In Europe
          iec: 1000,
          // In North America
          ul: 600,
        },
        // Maximum series fuse rating
        fuseRatingAmps: 15,
      },
    };
  }

  render() {
    return html` <main></main> `;
  }
}

customElements.define('pv-panel', PvPanel);
