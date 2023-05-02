import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CloudComponent } from './cloud/cloud.component';
import { ProfessionalCloudComponent } from './professional-cloud/professional-cloud.component';

const routes: Routes = [
  {path:"cloud/cloud",component:CloudComponent},
  {path:"cloud/professional-cloud",component:ProfessionalCloudComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CloudRoutingModule { }
