import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-codegaurd-website-backup',
  templateUrl: './codegaurd-website-backup.component.html',
  styleUrls: ['./codegaurd-website-backup.component.scss']
})
export class CodegaurdWebsiteBackupComponent {
  scroll(el: HTMLElement) {
    el.scrollIntoView({ behavior: 'smooth' });
  }

  scrolled: boolean | unknown = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.scrolled = window.scrollY > 10;

  }
}
