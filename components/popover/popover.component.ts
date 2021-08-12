import { transition, style, state, trigger, animate } from '@angular/animations';
import { Component, OnInit, ViewChild, AfterViewInit, ElementRef, TemplateRef } from '@angular/core';
import { faQuestionCircle } from '@fortawesome/free-regular-svg-icons'

@Component({
  selector: 'mcalizzi-info',
  templateUrl: './popover.component.html',
  styleUrls: ['./popover.component.css'],
  animations: [
    trigger('fade', [
      state('void', style({
        opacity: 0,
      })),
      transition('void <=> *', [
        animate('.2s')
      ])
    ])
  ]
})
export class PopoverComponent {
  shown = false
  questionIcon = faQuestionCircle
  constructor() { }

}
