import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'mcalizzi-home-features',
  templateUrl: './mcalizzi-home-features.component.html',
  styleUrls: ['./mcalizzi-home-features.component.css']
})
export class McalizziHomeFeaturesComponent implements OnInit {
  @Input('cr-features') features

  constructor() { }

  ngOnInit(): void {
  }

}
