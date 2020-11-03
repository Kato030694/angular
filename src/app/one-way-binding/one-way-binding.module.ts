
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OnewayBindingComponent } from './oneway-binding/oneway-binding.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [OnewayBindingComponent],
  imports: [
    CommonModule, FormsModule
  ],
  exports: [OnewayBindingComponent],

})
export class OneWayBindingModule { }
