import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CodegaurdWebsiteBackupComponent } from './codegaurd-website-backup/codegaurd-website-backup.component';
import { SitelockComponent } from './sitelock/sitelock.component';
import { SslCertificatesComponent } from './ssl-certificates/ssl-certificates.component';

const routes: Routes = [
  {path:"security/codegaurd-website-backup", component:CodegaurdWebsiteBackupComponent},
  {path:"security/sitelock", component:SitelockComponent},
  {path:"security/ssl-certificates", component:SslCertificatesComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SecurityRoutingModule { }
