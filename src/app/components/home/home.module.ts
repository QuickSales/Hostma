import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';
import { Home1Component } from './home1/home1.component';
import { Home2Component } from './home2/home2.component';
import { NgbCarousel, NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { SwiperModule } from 'swiper/angular';
@NgModule({
  declarations: [
    HomeComponent,
    Home1Component,
    Home2Component
  ],
  imports: [

CommonModule,
    HomeRoutingModule,
    NgbModule,
    NgbCarousel,
    SwiperModule
 ],

})
export class HomeModule { }
