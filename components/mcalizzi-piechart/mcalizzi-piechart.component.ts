import { CurrencyPipe } from '@angular/common';
import { AfterViewInit, Component, ElementRef, ViewChild, Input, OnInit } from '@angular/core';
import { Chart, Point } from "chart.js/dist/chart";

@Component({
  selector: 'mcalizzi-piechart',
  templateUrl: './mcalizzi-piechart.component.html',
  styleUrls: ['./mcalizzi-piechart.component.css']
})

export class McalizziPiechartComponent implements AfterViewInit, OnInit {
  _data
  dataTotal

  //required inputs
  @Input('cr-data')
  set data(data) {
    this._data = data
    if(this.chart) {
      this.chart.data.labels = data.xvalues
      this.chart.data.datasets[0].data = data.yvalues 
      this.dataTotal = this.data.yvalues.reduce((a,v) => a+v, 0)
      this.chart.update()
    } 
  }
  get data() {
    return this._data
  }
  //optional inputs
  @Input('co-yaxis-pipe') yaxisPipe
  @Input('co-total-title') totalTitle = 'Total'

  @ViewChild('chart')
  private chartRef: ElementRef;
  private chart: Chart;

  private colors = [
    "rgb(2, 117, 216)", "rgb(92, 184, 92)","rgb(91, 192, 222)",
    "rgb(240, 173, 78)", "rgb(217, 83, 79)", "rgb(41, 43, 44)",
    "rgb(247, 247, 247)"]

  constructor() {}

  ngOnInit() {
    this.dataTotal = this.data.yvalues.reduce((a,v) => a+v, 0)
  }

  private getTooltipTitle = (context) => {
    return context[0].label
  }

  private getTooltipLabel = (context) => {
    let value = context.dataset.data[context.dataIndex]
    let percent = Math.round(value/this.dataTotal*100)
    if(this.yaxisPipe) value = this.yaxisPipe.transform(value)
    return ' ' + value + ' (' + percent + '%)'
  }

  ngAfterViewInit() {
    this.chart = new Chart(this.chartRef.nativeElement, {
      type: "pie",
      data: {
        labels: this.data.xvalues,
        datasets: [{
          backgroundColor: this.colors,
          label: "money",
          data: this.data.yvalues,
        }]
      },
      options: {
        maintainAspectRatio: true,
        aspectRatio: 2,
        plugins: {
          legend: {
            position: 'right',
            align: 'center',
            display: true
          },
          tooltip: {
            callbacks: {
              title: this.getTooltipTitle,
              label: this.getTooltipLabel
            }
          },
        }
      }
    });
  }
}