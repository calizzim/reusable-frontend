import { Directive, ElementRef, Host, HostBinding, HostListener, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[SizeClass]'
})
export class SizeClassDirective implements OnInit {
  constructor() { }
  @Input('SizeClass') sizeClass

  size:number

  @HostListener('window:resize')
  onResize() {
    this.size = window.innerWidth
    if(this.followRule()) return this.class = this.sizeClass[1]
    this.class = ''
  }

  @HostBinding('class') class

  followRule() {
    switch(this.sizeClass[0]) {
      case 'xs': return true
      case 'sm': return this.size >= 576 
      case 'md': return this.size >= 768
      case 'lg': return this.size >= 992
      case 'xl': return this.size >= 1200
      case 'xxl': return this.size >= 1400
      case 'ltxs': return this.size < 576
      case 'ltsm': return this.size < 768 
      case 'ltmd': return this.size < 992
      case 'ltlg': return this.size < 1200
      case 'ltxl': return this.size < 1400
      case 'ltxxl': return true
    }
  }
  
  ngOnInit() {
    this.onResize()
  }
}
