import { Component } from '@angular/core';
import ApexCharts from 'apexcharts'

@Component({
  selector: 'app-grafico-2',
  standalone: false,
  templateUrl: './grafico-2.component.html',
  styleUrl: './grafico-2.component.scss'
})
export class Grafico2Component {
  options = {
    colors: ['#007924'],
    chart: {
      type: 'bar',
      height: "96%",
      zoom: {
        enabled: false
      },
      foreColor: "#a8a8a8",
      toolbar: {
        autoSelected: "pan",
        show: false
      }
    },
    plotOptions: {
      bar: {
        horizontal: true
      }
    },
    series: [{
      data: [{
        x: 'category A',
        y: 10
      }, {
        x: 'category B',
        y: 18
      }, {
        x: 'category C',
        y: 13
      }]
    }],
      title: {
      text: 'PRINCIPAIS ESTADOS QUE ATUAMOS',
      align: 'center'
    },
  };

  ngAfterViewInit() {
    const chart = new ApexCharts(document.querySelector("#chart-2"), this.options);
    chart.render();
  }
}
