import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WebsitesRoutingModule } from './websites-routing.module';
import { WeeblyComponent } from './weebly/weebly.component';
import { WebsiteBuilderComponent } from './website-builder/website-builder.component';
import { ThemesComponent } from './themes/themes.component';
import { PluginsComponent } from './plugins/plugins.component';
import { LogosComponent } from './logos/logos.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SwiperModule } from 'swiper/angular';
@NgModule({
  declarations: [
    WeeblyComponent,
    WebsiteBuilderComponent,
    ThemesComponent,
    PluginsComponent,
    LogosComponent
  ],
  imports: [
  CommonModule,
    WebsitesRoutingModule,
    NgbModule,
    SwiperModule
  ]
})
export class WebsitesModule { }
