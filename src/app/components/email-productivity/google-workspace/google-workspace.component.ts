import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-google-workspace',
  templateUrl: './google-workspace.component.html',
  styleUrls: ['./google-workspace.component.scss']
})
export class GoogleWorkspaceComponent {
  scroll(el: HTMLElement) {
    el.scrollIntoView({ behavior: 'smooth' });
  }

  scrolled: boolean | unknown = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.scrolled = window.scrollY > 10;

  }
}
