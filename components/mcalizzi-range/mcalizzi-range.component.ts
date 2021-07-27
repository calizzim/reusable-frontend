import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'mcalizzi-range',
  templateUrl: './mcalizzi-range.component.html',
  styleUrls: ['./mcalizzi-range.component.css']
})
export class McalizziRangeComponent implements OnInit {
  //required properties
  @Input('cr-title') title
  @Input('cr-min') min
  @Input('cr-max') max
  
  @Input('cr-value') _value
  @Output('cr-valueChange') _valueChange = new EventEmitter<number>()
  
  set value(v) { this._value = v; this._valueChange.emit(v) }
  get value() { return this._value }

  //optional properties
  constructor() { }

  ngOnInit(): void {
  }

}
