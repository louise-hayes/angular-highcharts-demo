import { Component, OnInit , Input} from '@angular/core';
import { Chart } from 'angular-highcharts';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent implements OnInit {
  @Input() barChartData: any;

  chart;

  

  // add() {
  //   this.chart.addPoint(Math.floor(Math.random() * 10));
  // }

  constructor() {

  }

  ngOnInit() {
    console.log(this.barChartData);
    this.chart = new Chart({
      chart: {
        type: 'column'//options are bar for horizontal, column for vertical
      },
      title: {
        text: 'Monthly Signups' //main chart header title
      },
      credits: {
        enabled: false // if true, credits such as a link to the copywrite company could go bottom of chart
      },
      xAxis: {
        categories: ['Jan', 'Feb', 'March', 'April'] //labels for x vertical line 
    },
    yAxis: {
        title: {
            text: 'Patients' //labels for y horizontal line
        }
    },
      series: [{ //series is columns of data on the chart
        name: 'Signups',
        data: this.barChartData.arrayOfSignups //appears on y line. for each category of x, you need a value (Jan is 10, Feb is 20 etc)
      },
      { 
        name: 'Total Visits',
        data: this.barChartData.arrayOfExits
      }]
    });
  }

}
