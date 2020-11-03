import { Directive, ElementRef, HostListener, Renderer2, OnInit } from '@angular/core';

@Directive({
  selector: '[appButtonHover]'
})
export class ButtonHoverDirective implements OnInit{

  constructor(private El:ElementRef, private renderer2: Renderer2) {}
    // Lang nghe su kien
    @HostListener('mouseenter') SuKienHover(){
      this.renderer2.setStyle(this.El.nativeElement, "background-color", "transparent")
      this.renderer2.setStyle(this.El.nativeElement,"color","black")
    }
    @HostListener('mouseleave') SuKienLeave(){
       this.renderer2.setStyle(this.El.nativeElement, "background-color", "red")
     
    }
   ngOnInit(){
     this.renderer2.setStyle(this.El.nativeElement,'background-color','red');
     this.renderer2.setStyle(this.El.nativeElement, "color", "white");
     this.renderer2.setStyle(this.El.nativeElement,'border','1px solid red');
   }

}
