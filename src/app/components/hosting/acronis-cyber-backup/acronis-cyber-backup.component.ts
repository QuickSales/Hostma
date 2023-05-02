import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-acronis-cyber-backup',
  templateUrl: './acronis-cyber-backup.component.html',
  styleUrls: ['./acronis-cyber-backup.component.scss']
})
export class AcronisCyberBackupComponent {
  scroll(el: HTMLElement) {
    el.scrollIntoView({ behavior: 'smooth' });
  }

  scrolled: boolean | unknown = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.scrolled = window.scrollY > 10;

  }
}
