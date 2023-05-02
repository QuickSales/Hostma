import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BusinessEmailComponent } from './business-email/business-email.component';
import { EnterpriseEmailComponent } from './enterprise-email/enterprise-email.component';
import { GoogleWorkspaceComponent } from './google-workspace/google-workspace.component';

const routes: Routes = [
  {path:"email-productivity/business-email",component:BusinessEmailComponent},
  {path:"email-productivity/enterprise-email",component:EnterpriseEmailComponent},
  {path:"email-productivity/google-workspace",component:GoogleWorkspaceComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmailProductivityRoutingModule { }
