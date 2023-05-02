import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginStyle2Component } from './login-style2/login-style2.component';
import { RegistrationStyle2Component } from './registration-style2/registration-style2.component';
import { UnderMaintainanceComponent } from './under-maintainance/under-maintainance.component';

const routes: Routes = [
  {path:"custom-pages/login-style2",component:LoginStyle2Component},
  {path:"custom-pages/registration-style2",component:RegistrationStyle2Component},
  {path:"custom-pages/under-maintainance",component:UnderMaintainanceComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomPagesRoutingModule { }
