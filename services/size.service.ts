import { Injectable } from '@angular/core';
import { HostListener } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class SizeService {
  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.width = window.innerWidth
    console.log(this.width)
  }
  width:Number = window.innerWidth
  constructor() { }
}
