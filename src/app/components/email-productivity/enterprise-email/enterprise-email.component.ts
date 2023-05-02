import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-enterprise-email',
  templateUrl: './enterprise-email.component.html',
  styleUrls: ['./enterprise-email.component.scss']
})
export class EnterpriseEmailComponent {
  scroll(el: HTMLElement) {
    el.scrollIntoView({ behavior: 'smooth' });
  }

  scrolled: boolean | unknown = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.scrolled = window.scrollY > 10;

  }
}
