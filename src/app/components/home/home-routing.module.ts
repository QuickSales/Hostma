import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { Home1Component } from './home1/home1.component';
import { Home2Component } from './home2/home2.component';

const routes: Routes = [
  {path:'',
  children: [
      {
          path: 'home/home', component:  HomeComponent
      },
      {
        path: 'home/home1', component:  Home1Component
    },
    {
      path: 'home/home2', component:  Home2Component
  },
    ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
