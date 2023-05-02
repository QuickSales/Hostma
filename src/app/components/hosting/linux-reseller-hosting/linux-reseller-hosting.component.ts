import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-linux-reseller-hosting',
  templateUrl: './linux-reseller-hosting.component.html',
  styleUrls: ['./linux-reseller-hosting.component.scss']
})
export class LinuxResellerHostingComponent {
  scroll(el: HTMLElement) {
    el.scrollIntoView({ behavior: 'smooth' });
  }

  scrolled: boolean | unknown = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.scrolled = window.scrollY > 10;

  }
}
