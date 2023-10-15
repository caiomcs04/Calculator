import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appDataTest]'
})
export class DataTestDirective {
  @Input() appDataTest: string | undefined;

  constructor(private el: ElementRef) {}

  ngOnInit() {
    this.el.nativeElement.setAttribute('data-test', this.appDataTest);
  }
}
