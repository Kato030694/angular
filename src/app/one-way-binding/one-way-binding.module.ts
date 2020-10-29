
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OnewayBindingComponent } from './oneway-binding/oneway-binding.component';



@NgModule({
  declarations: [OnewayBindingComponent],
  imports: [
    CommonModule
  ],
  exports: [OnewayBindingComponent],

})
export class OneWayBindingModule { }
