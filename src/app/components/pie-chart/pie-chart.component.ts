import { Component, OnInit, Input } from '@angular/core';
import { Chart } from 'angular-highcharts';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})

export class PieChartComponent implements OnInit {
  //pie chart data input
  @Input() pieChartData:any;

  chart;

  constructor() {
    
   }

  ngOnInit() {
    console.log(this.pieChartData);
    // signupvar = this.signups;
 console.log(this.pieChartData.numOfSignups);

    this.chart = new Chart({

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
          y: this.pieChartData.numOfSignups,
          sliced: true,
          selected: true
      },
      {
        name: 'Exits',
          y: this.pieChartData.numOfExits,
          sliced: true,
          selected: true
      },
      {
        name: 'Requested Info',
          y: this.pieChartData.numOfreqests,
          sliced: true,
          selected: true
      },
      {
        name: 'Enganged in a Chat',
          y: this.pieChartData.numOfChats,
          sliced: true,
          selected: true
      }
    ]
    }]
    });
  }

}
