import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-professional-cloud',
  templateUrl: './professional-cloud.component.html',
  styleUrls: ['./professional-cloud.component.scss']
})
export class ProfessionalCloudComponent {
  scroll(el: HTMLElement) {
    el.scrollIntoView({ behavior: 'smooth' });
  }

  scrolled: boolean | unknown = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.scrolled = window.scrollY > 10;

  }
}
