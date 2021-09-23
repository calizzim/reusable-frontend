import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'mcalizzi-range-pie',
  templateUrl: './mcalizzi-range-pie.component.html',
  styleUrls: ['./mcalizzi-range-pie.component.css']
})
export class McalizziRangePieComponent implements OnInit {
  @Input('cr-data') data
  @Input('cr-range-title') rangeTitle

  @Input('co-range-offset') rangeMin = 0
  @Input('co-yaxis-pipe') yaxisPipe = null

  index = 0
  _rangeValue
  set rangeValue(_rangeValue) {
    this._rangeValue = _rangeValue
    this.index = _rangeValue - this.rangeMin
  }
  get rangeValue() {
    return this._rangeValue
  }




  constructor() { }

  ngOnInit(): void {
    this._rangeValue = this.rangeMin
  }

}
