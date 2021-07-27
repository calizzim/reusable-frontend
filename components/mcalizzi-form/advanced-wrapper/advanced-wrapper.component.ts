import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'advanced-wrapper',
  templateUrl: './advanced-wrapper.component.html',
  styleUrls: ['./advanced-wrapper.component.css']
})
export class AdvancedWrapperComponent implements OnInit {
  @Input('wrapped') wrapped = false
  constructor() { }

  ngOnInit(): void {
  }

}
