import { DirectiveModule } from './directive/directive.module';
import { OneWayBindingModule } from './one-way-binding/one-way-binding.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './home/header/header.component';
import { IndexComponent } from './home/index/index.component';
import { FooterComponent } from './home/footer/footer.component';
import { IndexContentComponent } from './home/index/index-content/index-content.component';
import { SliderComponent } from './home/index/slider/slider.component';
import { ItemComponent } from './home/index/index-content/item/item.component';
import { LayoutsModule } from './layouts/layouts.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    IndexComponent,
    FooterComponent,
    IndexContentComponent,
    SliderComponent,
    ItemComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutsModule,
    OneWayBindingModule,
    DirectiveModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

