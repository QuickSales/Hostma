import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-name-suggestion-tool',
  templateUrl: './name-suggestion-tool.component.html',
  styleUrls: ['./name-suggestion-tool.component.scss']
})
export class NameSuggestionToolComponent {
  scroll(el: HTMLElement) {
    el.scrollIntoView({ behavior: 'smooth' });
  }

  scrolled: boolean | unknown = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.scrolled = window.scrollY > 10;

  }
}
