import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmailProductivityRoutingModule } from './email-productivity-routing.module';
import { BusinessEmailComponent } from './business-email/business-email.component';
import { GoogleWorkspaceComponent } from './google-workspace/google-workspace.component';
import { EnterpriseEmailComponent } from './enterprise-email/enterprise-email.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    BusinessEmailComponent,
    GoogleWorkspaceComponent,
    EnterpriseEmailComponent
  ],
  imports: [
    CommonModule,
    EmailProductivityRoutingModule,
    NgbModule
  ]
})
export class EmailProductivityModule { }
