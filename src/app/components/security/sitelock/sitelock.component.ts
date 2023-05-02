import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-sitelock',
  templateUrl: './sitelock.component.html',
  styleUrls: ['./sitelock.component.scss']
})
export class SitelockComponent {
  scroll(el: HTMLElement) {
    el.scrollIntoView({ behavior: 'smooth' });
  }

  scrolled: boolean | unknown = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.scrolled = window.scrollY > 10;

  }
}
