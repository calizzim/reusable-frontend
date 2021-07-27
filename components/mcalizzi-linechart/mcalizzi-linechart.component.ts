import { CurrencyPipe } from '@angular/common';
import { AfterViewInit, Component, ElementRef, ViewChild, Input } from '@angular/core';
import { Chart, Point } from "chart.js/dist/chart";

@Component({
  selector: 'mcalizzi-linechart',
  templateUrl: './mcalizzi-linechart.component.html',
  styleUrls: ['./mcalizzi-linechart.component.css']
})

export class McalizziLinechartComponent implements AfterViewInit {
  //required properties
  _data
  @Input('cr-data')
  set data(data) {
    this._data = data
    if(this.chart) {
      this.chart.data.labels = data.xvalues
      this.chart.data.datasets[0].data = data.yvalues 
      this.chart.update()
    } 
  }
  get data() {
    return this._data
  }

  //optional properties
  @Input('co-yaxis-pipe') yaxisPipe
  @Input('co-xaxis') xaxis
  @Input('co-yaxis') yaxis
  @Input('co-tooltip-prefix') tooltipPrefix

  @ViewChild('chart') private chartRef: ElementRef;
  private chart: Chart;

  private colors = [
    "rgb(2, 117, 216)", "rgb(92, 184, 92)","rgb(91, 192, 222)",
    "rgb(240, 173, 78)", "rgb(217, 83, 79)", "rgb(41, 43, 44)",
    "rgb(247, 247, 247)"]
  private backgroundColors = [
    "rgba(2, 117, 216, 0.2)", "rgba(92, 184, 92, 0.2)","rgba(91, 192, 222, 0.2)",
    "rgba(240, 173, 78,0.2)", "rgba(217, 83, 79,0.2)", "rgba(41, 43, 44, 0.2)",
    "rgba(247, 247, 247, 0.2)"]

  private getTooltipTitle = (context) => {
    let value = context[0].label
    if(this.tooltipPrefix) return this.tooltipPrefix + ' ' + value
    return value
  }
  private getTooltipLabel = (context) => {
    let value = context.dataset.data[context.dataIndex]
    if(this.yaxisPipe) return ' ' + this.yaxisPipe.transform(value)
    return value
  }
  private formatTicks = (value, ...n) => {
    if(this.yaxisPipe) return this.yaxisPipe.transform(value)
    return value
  }

  constructor() {}

  ngAfterViewInit() {
    this.chart = new Chart(this.chartRef.nativeElement, {
      type: "line",
      data: {
        labels: this.data.xvalues,
        datasets: [{
          label: "money",
          data: this.data.yvalues,
          borderColor: this.colors[0],
          backgroundColor: this.backgroundColors[0],
          fill: true,
          pointHoverRadius: 0,
          pointRadius: 0,
          pointHitRadius: 500,
        }]
      },
      options: {
        plugins: {
          legend: {
            display: false
          },
          tooltip: {
            callbacks: {
              title: this.getTooltipTitle,
              label: this.getTooltipLabel,
            }
          }
        },
        scales: {
          x: {
            title: {
              display: this.xaxis,
              text: this.xaxis
            }
          },
          y: {
            title: {
              display: this.yaxis,
              text: this.yaxis
            },
            ticks: {
              callback: this.formatTicks
            }
          }
        }
      }
    });
  }
}