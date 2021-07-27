import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'mcalizzi-table',
  templateUrl: './mcalizzi-table.component.html',
  styleUrls: ['./mcalizzi-table.component.css']
})
export class McalizziTableComponent implements OnInit {
  @Input('cr-data') data 
  @Input('co-columnNames') columnNames
  constructor() { }
  ngOnInit(): void {
  }
}
