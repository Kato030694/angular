import { Directive, ElementRef, Renderer2, OnInit } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]',
})
export class BetterHighlightDirective implements OnInit {
  constructor(private El: ElementRef, private renderer2: Renderer2) {}
  ngOnInit() {
    this.renderer2.setStyle(this.El.nativeElement, 'background-color', 'blue');
    let noidung = this.renderer2.createText(' text');
    this.renderer2.appendChild(this.El.nativeElement, noidung);
  }
}
