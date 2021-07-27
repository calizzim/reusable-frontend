import { ApplyRefDirective } from '../../directives/apply-ref.directive';
import { Component, ContentChild, Input, OnInit, ElementRef, TemplateRef, ContentChildren, QueryList, AfterContentInit } from '@angular/core';

@Component({
  selector: 'mcalizzi-nav',
  templateUrl: './mcalizzi-nav.component.html',
  styleUrls: ['./mcalizzi-nav.component.css']
})
export class McalizziNavComponent implements OnInit, AfterContentInit {
  @ContentChildren(ApplyRefDirective) tabs:QueryList<ApplyRefDirective>
  currentTab:string
  tabNames:string[]
  constructor() { 
  }
  
  ngOnInit(): void {
  }
  
  ngAfterContentInit() {
    this.tabNames = this.tabs.map(v => v.templateName)
    this.currentTab = this.tabNames[0]
  }

}
