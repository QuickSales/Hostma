import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DomainsRoutingModule } from './domains-routing.module';
import { RegisterADomainComponent } from './register-a-domain/register-a-domain.component';
import { NewDomainExtensionsComponent } from './new-domain-extensions/new-domain-extensions.component';
import { PremiumDomainsComponent } from './premium-domains/premium-domains.component';
import { TransferYourDomainsComponent } from './transfer-your-domains/transfer-your-domains.component';
import { BulkDomainTransferComponent } from './bulk-domain-transfer/bulk-domain-transfer.component';
import { FreeWithEveryDomainComponent } from './free-with-every-domain/free-with-every-domain.component';
import { NameSuggestionToolComponent } from './name-suggestion-tool/name-suggestion-tool.component';
import { WhoisLookupComponent } from './whois-lookup/whois-lookup.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { NgSelectModule } from '@ng-select/ng-select';
@NgModule({
  declarations: [
    RegisterADomainComponent,
    NewDomainExtensionsComponent,
    PremiumDomainsComponent,
    TransferYourDomainsComponent,
    BulkDomainTransferComponent,
    FreeWithEveryDomainComponent,
    NameSuggestionToolComponent,
    WhoisLookupComponent
  ],
  imports: [
    CommonModule,
    DomainsRoutingModule,
    NgbModule,
    NgSelectModule
  ]
})
export class DomainsModule { }
