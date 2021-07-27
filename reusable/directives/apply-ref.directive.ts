import { Directive, TemplateRef, Input } from '@angular/core';
@Directive({
  selector: '[ApplyRef]'
})
export class ApplyRefDirective {
  @Input('ApplyRef') templateName
  @Input('disable') disable
  constructor(public templateRef: TemplateRef<unknown>) {}
}
