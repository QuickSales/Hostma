import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-wordpress-shared-hosting',
  templateUrl: './wordpress-shared-hosting.component.html',
  styleUrls: ['./wordpress-shared-hosting.component.scss']
})
export class WordpressSharedHostingComponent {
  scroll(el: HTMLElement) {
    el.scrollIntoView({ behavior: 'smooth' });
  }

  scrolled: boolean | unknown= false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.scrolled = window.scrollY > 10;

  }
}
