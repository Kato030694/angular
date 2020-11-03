import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DirectiveIfComponent } from './directive-if/directive-if.component';
import { DirectiveIfelseComponent } from './directive-ifelse/directive-ifelse.component';
import { DirectiveSwitchComponent } from './directive-switch/directive-switch.component';
import { DirectiveNgforComponent } from './directive-ngfor/directive-ngfor.component';
import { NgclassComponent } from './ngclass/ngclass.component';
import { HighlightDirective } from './my-directive/highlight.directive';
import { BetterHighlightDirective } from './my-directive/better-highlight.directive';
import { ButtonHoverDirective } from './my-directive/button-hover.directive';


@NgModule({
  declarations: [
    DirectiveIfComponent,
    DirectiveIfelseComponent,
    DirectiveSwitchComponent,
    DirectiveNgforComponent,
    NgclassComponent,
    HighlightDirective,
    BetterHighlightDirective,
    ButtonHoverDirective,

  ],
  imports: [CommonModule],
  exports: [
    DirectiveIfComponent,
    DirectiveIfelseComponent,
    DirectiveSwitchComponent,
    DirectiveNgforComponent,
    NgclassComponent,
    HighlightDirective,
    BetterHighlightDirective,
    ButtonHoverDirective,
  ],
})
export class DirectiveModule {}
