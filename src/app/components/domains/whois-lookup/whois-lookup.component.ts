import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-whois-lookup',
  templateUrl: './whois-lookup.component.html',
  styleUrls: ['./whois-lookup.component.scss']
})
export class WhoisLookupComponent {
  scroll(el: HTMLElement) {
    el.scrollIntoView({ behavior: 'smooth' });
  }

  scrolled: boolean | unknown= false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.scrolled = window.scrollY > 10;

  }
}
