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
  hiddenSeries: string[] = [];

  euroIcon = faEuroSign;
  electricityIcon = faPlug;
  gasIcon = faFire;

  data?: any[];

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
    this.setData();
  }

  setActive(filter: string) {
    this.activeFilter = filter;
    this.hiddenSeries = [];
    this.setData();
  }

  onSelect(event: any) {
    if (typeof event === 'string') {
      // legend item clicked
      this.hiddenSeries.includes(event)
        ? this.hiddenSeries = this.hiddenSeries.filter((s) => s !== event)
        : this.hiddenSeries.push(event);
      this.setData();
    }
  }

  private isElectricity() {
    return this.activeFilter === 'electricity';
  }

  private filterHidden(series: { name: string; value: number }[]) {
    return series.map((s) =>
      this.hiddenSeries.includes(s.name)
        ? Object.assign({}, s, { value: 0 })
        : s
    );
  }

  private setData() {
    const data = this.isElectricity()
      ? electricity.map((e) =>
          Object.assign({}, e, { series: this.filterHidden(e.series) })
        )
      : this.filterHidden(gas);

    Object.assign(this, { data });
  }
}
