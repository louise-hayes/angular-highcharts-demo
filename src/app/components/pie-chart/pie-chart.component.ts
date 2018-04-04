import { Component, OnInit } from '@angular/core';
import { Chart } from 'angular-highcharts';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent implements OnInit {
  chart = new Chart({
    chart: {
      type: 'pie'//pie
    },
    title: {
      text: 'Total Visits'
    },
    tooltip: {
      pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
  },
    credits: {
      enabled: false
    },
    plotOptions: {
      pie: {
          allowPointSelect: true,
          cursor: 'pointer',
          dataLabels: {
              enabled: true,
              format: '<b>{point.name}</b>: {point.percentage:.1f} %',
              style: {
                  color: 'black'
              }
          }
      }
  },
    series: [{
      name: 'Patients',
      data: [{
        name: 'Signups',
        y: 10,
        sliced: true,
        selected: true
    },
    {
      name: 'Exits',
        y: 15,
        sliced: true,
        selected: true
    },
    {
      name: 'Requested Info',
        y: 40,
        sliced: true,
        selected: true
    },
    {
      name: 'Enganged in a Chat',
        y: 35,
        sliced: true,
        selected: true
    }
  ]
  }]
  });

  constructor() { }

  ngOnInit() {
  }

}
