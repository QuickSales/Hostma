import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-windows-reseller-hosting',
  templateUrl: './windows-reseller-hosting.component.html',
  styleUrls: ['./windows-reseller-hosting.component.scss']
})
export class WindowsResellerHostingComponent {
  scroll(el: HTMLElement) {
    el.scrollIntoView({ behavior: 'smooth' });
  }

  scrolled: boolean | unknown = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.scrolled = window.scrollY > 10;

  }
}
