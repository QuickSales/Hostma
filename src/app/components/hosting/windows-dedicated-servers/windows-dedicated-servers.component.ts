import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-windows-dedicated-servers',
  templateUrl: './windows-dedicated-servers.component.html',
  styleUrls: ['./windows-dedicated-servers.component.scss']
})
export class WindowsDedicatedServersComponent {
  scroll(el: HTMLElement) {
    el.scrollIntoView({ behavior: 'smooth' });
  }

  scrolled: boolean | unknown = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.scrolled = window.scrollY > 10;

  }
}
