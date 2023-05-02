import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { BlogDetailsComponent } from './blog-details/blog-details.component';
import { BlogComponent } from './blog/blog.component';
import { ContactusComponent } from './contactus/contactus.component';
import { FaqsComponent } from './faqs/faqs.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { LoginStyle1Component } from './login-style1/login-style1.component';
import { RegistrationStyle1Component } from './registration-style1/registration-style1.component';

const routes: Routes = [
  {path:"pages/aboutus",component:AboutusComponent},
  {path:"pages/blog",component:BlogComponent},
  {path:"pages/blog-details",component:BlogDetailsComponent},
  {path:"pages/contact-us",component:ContactusComponent},
  {path:"pages/faqs",component:FaqsComponent},
  {path:"pages/forgot-password",component:ForgotPasswordComponent},
  {path:"pages/login-style1",component:LoginStyle1Component},
  {path:"pages/registration-style1",component:RegistrationStyle1Component},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
