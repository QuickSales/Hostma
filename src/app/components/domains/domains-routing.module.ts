import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BulkDomainTransferComponent } from './bulk-domain-transfer/bulk-domain-transfer.component';
import { FreeWithEveryDomainComponent } from './free-with-every-domain/free-with-every-domain.component';
import { NameSuggestionToolComponent } from './name-suggestion-tool/name-suggestion-tool.component';
import { NewDomainExtensionsComponent } from './new-domain-extensions/new-domain-extensions.component';
import { PremiumDomainsComponent } from './premium-domains/premium-domains.component';
import { RegisterADomainComponent } from './register-a-domain/register-a-domain.component';
import { TransferYourDomainsComponent } from './transfer-your-domains/transfer-your-domains.component';
import { WhoisLookupComponent } from './whois-lookup/whois-lookup.component';

const routes: Routes = [
  {path:"domains/bulk-domain-transfer",component:BulkDomainTransferComponent},
  {path:"domains/free-with-every-domain",component:FreeWithEveryDomainComponent},
  {path:"domains/name-suggestion-tool",component:NameSuggestionToolComponent},
  {path:"domains/new-domain-extensions",component:NewDomainExtensionsComponent},
  {path:"domains/premium-domains",component:PremiumDomainsComponent},
  {path:"domains/register-a-domain",component:RegisterADomainComponent},
  {path:"domains/transfer-your-domains",component:TransferYourDomainsComponent},
  {path:"domains/whois-lookup",component:WhoisLookupComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DomainsRoutingModule { }
