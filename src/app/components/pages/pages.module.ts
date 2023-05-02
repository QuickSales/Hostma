import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { AboutusComponent } from './aboutus/aboutus.component';
import { BlogComponent } from './blog/blog.component';
import { BlogDetailsComponent } from './blog-details/blog-details.component';
import { ContactusComponent } from './contactus/contactus.component';
import { FaqsComponent } from './faqs/faqs.component';
import { SwitcherComponent } from './switcher/switcher.component';
import { LoginStyle1Component } from './login-style1/login-style1.component';
import { RegistrationStyle1Component } from './registration-style1/registration-style1.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ColorPickerModule } from 'ngx-color-picker';

import { SwiperModule } from 'swiper/angular';

@NgModule({
  declarations: [
    AboutusComponent,
    BlogComponent,
    BlogDetailsComponent,
    ContactusComponent,
    FaqsComponent,
    SwitcherComponent,
    LoginStyle1Component,
    RegistrationStyle1Component,
    ForgotPasswordComponent,

],
  imports: [

  CommonModule,
    PagesRoutingModule,
    NgbModule,
    ColorPickerModule,
    SwiperModule
  ]
})
export class PagesModule { }
