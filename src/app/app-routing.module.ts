
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FullLayoutComponent } from './shared/layouts/full-layout/full-layout.component';
import { FullContentRoutes } from './shared/components/routes/full.routes';
import { SwitcherLayoutComponent } from './shared/layouts/switcher-layout/switcher-layout.component';
import { SwitcherOneRoute } from './shared/components/routes/switchers';
import { CustomRoute } from './shared/components/routes/customroutes';
import { CustomLayoutComponent } from './shared/layouts/custom-layout/custom-layout.component';

const routes: Routes = [
  { path: '', redirectTo:'auth/login', pathMatch: 'full'},
  {
    path:'', loadChildren: ()=> import('./authentication/authentication.module').then(m => m.AuthenticationModule),
  },
  {
    path: '',
    redirectTo: '/home/home',
    pathMatch: 'full'
  },
  {
    path: '',
    component: FullLayoutComponent,
    children: FullContentRoutes
  },

  {
    path: '',
    component: SwitcherLayoutComponent,
    children: SwitcherOneRoute
  },
  {
    path: '',
    component: CustomLayoutComponent,
    children: CustomRoute
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
