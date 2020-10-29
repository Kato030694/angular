import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutHeaderComponent } from './layout-header/layout-header.component';
import { LayoutFooterComponent } from './layout-footer/layout-footer.component';
import { LayouteSliderComponent } from './layoute-slider/layoute-slider.component';



@NgModule({
  declarations: [LayoutHeaderComponent, LayoutFooterComponent, LayouteSliderComponent],
  imports: [
    CommonModule
  ],
  exports: [LayoutHeaderComponent, LayoutFooterComponent, LayouteSliderComponent]
})
export class LayoutsModule { }
