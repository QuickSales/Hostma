import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SecurityRoutingModule } from './security-routing.module';
import { SslCertificatesComponent } from './ssl-certificates/ssl-certificates.component';
import { SitelockComponent } from './sitelock/sitelock.component';
import { CodegaurdWebsiteBackupComponent } from './codegaurd-website-backup/codegaurd-website-backup.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    SslCertificatesComponent,
    SitelockComponent,
    CodegaurdWebsiteBackupComponent
  ],
  imports: [
    CommonModule,
    SecurityRoutingModule,
    NgbModule
  ]
})
export class SecurityModule { }
