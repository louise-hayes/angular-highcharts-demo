import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
//define and assign pie chart values
  pieChartData:any;
  barChartData:any;
  title = 'app';

constructor(){
  this.pieChartData = {
    numOfSignups :20,
    numOfExits : 30,
    numOfChats : 30,
    numOfreqests : 20
  
  }
  this.barChartData = {
    arrayOfSignups: [10, 20, 30, 40],
    arrayOfExits: [15, 30, 40 ,60]

  }
    console.log(this.pieChartData);
    console.log(this.barChartData);
};


}
