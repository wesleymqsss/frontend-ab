import { Component } from '@angular/core';
import ApexCharts from 'apexcharts'

@Component({
  selector: 'app-grafico-1',
  standalone: false,
  templateUrl: './grafico-1.component.html',
  styleUrl: './grafico-1.component.scss'
})
export class Grafico1Component {

  options = {
    series: [{
      name: "Desktops",
      data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
    }],
    chart: {
      height: "96%",
      type: 'area',
      zoom: {
        enabled: false
      },
      foreColor: "#a8a8a8",
      toolbar: {
        autoSelected: "pan",
        show: false
      }
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'straight'
    },
    title: {
      text: 'CADASTRO MENSAL DE ONGs',
      align: 'center'
    },
    grid: {
      clipMarkers: false,
      yaxis: {
        lines: {
          show: false
        }
      }
    },
    markers: {
      size: 5,
      colors: ["#45a039"],
      strokeColor: "#ffc107",
      strokeWidth: 3
    },
    color: ['#ffc107'],
    xaxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep']
    }
  };

  ngAfterViewInit() {
    const chart = new ApexCharts(document.querySelector("#chart"), this.options);
    chart.render();
  }
}
