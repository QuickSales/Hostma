import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-ssl-certificates',
  templateUrl: './ssl-certificates.component.html',
  styleUrls: ['./ssl-certificates.component.scss']
})
export class SslCertificatesComponent {
  scroll(el: HTMLElement) {
    el.scrollIntoView({ behavior: 'smooth' });
  }

  scrolled: boolean | unknown = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.scrolled = window.scrollY > 10;

  }
}
