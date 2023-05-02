import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HostingRoutingModule } from './hosting-routing.module';
import { LinuxSharedHostingComponent } from './linux-shared-hosting/linux-shared-hosting.component';
import { WindowsSharedHostingComponent } from './windows-shared-hosting/windows-shared-hosting.component';
import { WordpressSharedHostingComponent } from './wordpress-shared-hosting/wordpress-shared-hosting.component';
import { LinuxKvmVpsComponent } from './linux-kvm-vps/linux-kvm-vps.component';
import { DedicatedServersComponent } from './dedicated-servers/dedicated-servers.component';
import { WindowsDedicatedServersComponent } from './windows-dedicated-servers/windows-dedicated-servers.component';
import { LinuxResellerHostingComponent } from './linux-reseller-hosting/linux-reseller-hosting.component';
import { WindowsResellerHostingComponent } from './windows-reseller-hosting/windows-reseller-hosting.component';
import { CodegaurdWebsitebackupComponent } from './codegaurd-websitebackup/codegaurd-websitebackup.component';
import { SitelockMalwareDetectorComponent } from './sitelock-malware-detector/sitelock-malware-detector.component';
import { AcronisCyberBackupComponent } from './acronis-cyber-backup/acronis-cyber-backup.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    LinuxSharedHostingComponent,
    WindowsSharedHostingComponent,
    WordpressSharedHostingComponent,
    LinuxKvmVpsComponent,
    DedicatedServersComponent,
    WindowsDedicatedServersComponent,
    LinuxResellerHostingComponent,
    WindowsResellerHostingComponent,
    CodegaurdWebsitebackupComponent,
    SitelockMalwareDetectorComponent,
    AcronisCyberBackupComponent
  ],
  imports: [
    CommonModule,
    HostingRoutingModule,
    NgbModule
  ]
})
export class HostingModule { }
