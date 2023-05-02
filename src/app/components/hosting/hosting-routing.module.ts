import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcronisCyberBackupComponent } from './acronis-cyber-backup/acronis-cyber-backup.component';
import { CodegaurdWebsitebackupComponent } from './codegaurd-websitebackup/codegaurd-websitebackup.component';
import { DedicatedServersComponent } from './dedicated-servers/dedicated-servers.component';
import { LinuxKvmVpsComponent } from './linux-kvm-vps/linux-kvm-vps.component';
import { LinuxResellerHostingComponent } from './linux-reseller-hosting/linux-reseller-hosting.component';
import { LinuxSharedHostingComponent } from './linux-shared-hosting/linux-shared-hosting.component';
import { SitelockMalwareDetectorComponent } from './sitelock-malware-detector/sitelock-malware-detector.component';
import { WindowsDedicatedServersComponent } from './windows-dedicated-servers/windows-dedicated-servers.component';
import { WindowsResellerHostingComponent } from './windows-reseller-hosting/windows-reseller-hosting.component';
import { WindowsSharedHostingComponent } from './windows-shared-hosting/windows-shared-hosting.component';
import { WordpressSharedHostingComponent } from './wordpress-shared-hosting/wordpress-shared-hosting.component';

const routes: Routes = [
  {path:"hosting/acronis-cyber-backup",component:AcronisCyberBackupComponent},
  {path:"hosting/codegaurd-websitebackup",component:CodegaurdWebsitebackupComponent},
  {path:"hosting/dedicated-servers",component:DedicatedServersComponent},
  {path:"hosting/linux-kvm-vps",component:LinuxKvmVpsComponent},
  {path:"hosting/linux-reseller-hosting",component:LinuxResellerHostingComponent},
  {path:"hosting/linux-shared-hosting",component:LinuxSharedHostingComponent},
  {path:"hosting/sitelock-malware-detector",component:SitelockMalwareDetectorComponent},
  {path:"hosting/windows-dedicated-servers",component:WindowsDedicatedServersComponent},
  {path:"hosting/windows-reseller-hosting",component:WindowsResellerHostingComponent},
  {path:"hosting/windows-shared-hosting",component:WindowsSharedHostingComponent},
  {path:"hosting/wordpress-shared-hosting",component:WordpressSharedHostingComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HostingRoutingModule { }
