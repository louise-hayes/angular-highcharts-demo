# Highcarts Demo Angular 5

## Git: https://github.com/louise-hayes/angular-highcharts-demo.git

## To launch: 
```npm install```
```ng serve```

# Add the chart components to your app:

## Pie Chart:

- In Parent ```app.module.ts``` 
### Import the component

```
import { PieChartComponent } from './components/pie-chart/pie-chart.component'
```

### Add the component to NgModule declarations:
```
@NgModule({
  declarations: [
    AppComponent,
    PieChartComponent
    
  ],
```


- In Parent ```app.component.ts``` which will use the chart component
### Define and assign pieChartData values
```
export class AppComponent {
//define and assign pie chart values
  pieChartData:any;
  title = 'app';

constructor(){
  this.pieChartData = {
    numOfSignups :20,
    numOfExits : 30,
    numOfChats : 30,
    numOfreqests : 20
  
  }
    console.log(this.pieChartData);
};
}
```

In parent ```app.component.html```
### Invoke the <app-pie-chart> module with previously created pieChartData atrribute

```
<app-pie-chart [pieChartData]="pieChartData" ></app-pie-chart>
```


## Bar Chart

- In Parent ```app.module.ts``` 
### Import the Bar Chart component

```
import { BarChartComponent } from './components/bar-chart/bar-chart.component';

```
### Add the Bar Chart component to NgModule declarations:

```
@NgModule({
  declarations: [
    AppComponent,
    BarChartComponent
    
  ],
```


- In Parent ```app.component.ts``` which will use the chart component
### Define and assign Bar Chart data

```
export class AppComponent {
//define and assign bar chart values
  barChartData:any;
  title = 'app';

constructor(){
  this.barChartData = {
    arrayOfSignups: [10, 20, 30, 40],
    arrayOfExits: [15, 30, 40 ,60]

  }
    console.log(this.barChartData);
};
}
```
- In parent ```app.component.html```
### Invoke the Bar Chart module with barChartData attribute
```
<app-bar-chart[barChartData]="barChartData"></app-bar-chart> 

```















This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.7.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
