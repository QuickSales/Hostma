import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomPagesRoutingModule } from './custom-pages-routing.module';
import { LoginStyle2Component } from './login-style2/login-style2.component';
import { RegistrationStyle2Component } from './registration-style2/registration-style2.component';
import { UnderMaintainanceComponent } from './under-maintainance/under-maintainance.component';

@NgModule({
  declarations: [
    LoginStyle2Component,
    RegistrationStyle2Component,
    UnderMaintainanceComponent,
  ],
  imports: [
    CommonModule,
    CustomPagesRoutingModule
  ]
})
export class CustomPagesModule { }
