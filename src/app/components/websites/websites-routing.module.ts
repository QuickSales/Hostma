import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WebsiteBuilderComponent } from './website-builder/website-builder.component';
import { WeeblyComponent } from './weebly/weebly.component';
import { ThemesComponent } from './themes/themes.component';

const routes: Routes = [
  {path:"website/website-builder",component:WebsiteBuilderComponent},
  {path:"website/weebly",component:WeeblyComponent},
  {path:"website/themes",component:ThemesComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WebsitesRoutingModule { }
