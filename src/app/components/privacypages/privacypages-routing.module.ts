import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CancellationRefundPolicyComponent } from './cancellation-refund-policy/cancellation-refund-policy.component';
import { LegalComponent } from './legal/legal.component';

import { PaymentOptionsComponent } from './payment-options/payment-options.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { TermsOfServiceComponent } from './terms-of-service/terms-of-service.component';

const routes: Routes = [
  {path:"privacypages/cancellation-refund-policy",component:CancellationRefundPolicyComponent},
  {path:"privacypages/payment-options",component:PaymentOptionsComponent},
  {path:"privacypages/legal",component:LegalComponent},
  {path:"privacypages/privacy-policy",component:PrivacyPolicyComponent},
  {path:"privacypages/terms-of-service",component:TermsOfServiceComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrivacypagesRoutingModule { }
