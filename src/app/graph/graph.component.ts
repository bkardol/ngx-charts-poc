import { Component } from '@angular/core';
import { faEuroSign, faFire, faPlug } from '@fortawesome/free-solid-svg-icons';
import { LegendPosition } from '@swimlane/ngx-charts';

import { electricity, gas } from './data';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.scss'],
})
export class GraphComponent {

  activeFilter = 'electricity';

  euroIcon = faEuroSign;
  electricityIcon = faPlug;
  gasIcon = faFire;

  gas?: any[];
  electricity?: any[];

  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showXAxisLabel = false;
  xAxisLabel = 'Periode';
  showYAxisLabel = true;
  yAxisLabelElectricity = 'Verbruik in kWh';
  yAxisLabelGas = 'Verbruik in m3';
  legendPosition = LegendPosition.Below;

  colorSchemeElectricity = {
    domain: ['var(--accent-color)', 'var(--primary-color)'],
  } as any;
  colorSchemeGas = {
    domain: ['var(--accent-color)'],
  } as any;

  constructor() {
    Object.assign(this, { gas });
    Object.assign(this, { electricity });
  }

  setActive(filter: string) {
    this.activeFilter = filter;
  }
}
