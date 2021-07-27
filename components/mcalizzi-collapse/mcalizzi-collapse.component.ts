import { Component, OnInit, Input } from '@angular/core';
import { trigger, state, style, animate, transition, AUTO_STYLE } from '@angular/animations'
@Component({
  selector: 'mcalizzi-collapse',
  templateUrl: './mcalizzi-collapse.component.html',
  styleUrls: ['./mcalizzi-collapse.component.css'],
  animations: [
    trigger('collapse', [
      state('collapsed', style({
        height: '0',
        visibility: 'hidden'
      })),
      state('expanded', style({
        height: AUTO_STYLE,
        visibility: AUTO_STYLE
      })),
      transition('collapsed <=> expanded',[
        animate('.2s')
      ])
    ])
  ]
})
export class McalizziCollapseComponent implements OnInit {
  @Input('co-title') title
  constructor() { }
  collapsed=true
  ngOnInit(): void {
  }
}