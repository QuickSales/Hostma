import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-business-email',
  templateUrl: './business-email.component.html',
  styleUrls: ['./business-email.component.scss']
})
export class BusinessEmailComponent {
  scroll(el: HTMLElement) {
    el.scrollIntoView({ behavior: 'smooth' });
  }

  scrolled: boolean | unknown = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.scrolled = window.scrollY > 10;

  }
}
