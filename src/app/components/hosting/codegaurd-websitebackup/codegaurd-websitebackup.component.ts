import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-codegaurd-websitebackup',
  templateUrl: './codegaurd-websitebackup.component.html',
  styleUrls: ['./codegaurd-websitebackup.component.scss']
})
export class CodegaurdWebsitebackupComponent {
  scroll(el: HTMLElement) {
    el.scrollIntoView({ behavior: 'smooth' });
  }

  scrolled: boolean | unknown = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.scrolled = window.scrollY > 10;

  }
}
