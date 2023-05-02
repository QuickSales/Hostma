import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-dedicated-servers',
  templateUrl: './dedicated-servers.component.html',
  styleUrls: ['./dedicated-servers.component.scss']
})
export class DedicatedServersComponent {
  scroll(el: HTMLElement) {
    el.scrollIntoView({ behavior: 'smooth' });
  }

  scrolled: boolean | unknown = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.scrolled = window.scrollY > 10;

  }
}
