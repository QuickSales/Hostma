import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrivacypagesRoutingModule } from './privacypages-routing.module';
import { LegalComponent } from './legal/legal.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { TermsOfServiceComponent } from './terms-of-service/terms-of-service.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PaymentOptionsComponent } from './payment-options/payment-options.component';

@NgModule({
  declarations: [
    LegalComponent,
    PrivacyPolicyComponent,
    TermsOfServiceComponent,
    PaymentOptionsComponent
  ],
  imports: [
    CommonModule,
    PrivacypagesRoutingModule,
    NgbModule
  ]
})
export class PrivacypagesModule { }
