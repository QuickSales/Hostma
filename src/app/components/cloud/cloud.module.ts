import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CloudRoutingModule } from './cloud-routing.module';
import { CloudComponent } from './cloud/cloud.component';
import { ProfessionalCloudComponent } from './professional-cloud/professional-cloud.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    CloudComponent,
    ProfessionalCloudComponent
  ],
  imports: [
    CommonModule,
    CloudRoutingModule,
    NgbModule
  ]
})
export class CloudModule { }
