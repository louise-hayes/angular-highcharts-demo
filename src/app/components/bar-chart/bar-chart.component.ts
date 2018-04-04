import { Component, OnInit } from '@angular/core';
import { Chart } from 'angular-highcharts';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent implements OnInit {
  chart = new Chart({
    chart: {
      type: 'column'//pie
    },
    title: {
      text: 'Monthly Signups'
    },
    credits: {
      enabled: false
    },
    xAxis: {
      categories: ['Jan', 'Feb', 'March', 'April']
  },
  yAxis: {
      title: {
          text: 'Patients'
      }
  },
    series: [{
      name: 'Signups',
      data: [10, 20,30, 40]
    },
    { 
      name: 'Total Visits',
      data: [15, 30, 40 ,60]}

  ]
  });

  // add() {
  //   this.chart.addPoint(Math.floor(Math.random() * 10));
  // }

  constructor() {}

  ngOnInit() {}

}
