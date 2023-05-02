import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-linux-kvm-vps',
  templateUrl: './linux-kvm-vps.component.html',
  styleUrls: ['./linux-kvm-vps.component.scss']
})
export class LinuxKvmVpsComponent {
  scroll(el: HTMLElement) {
    el.scrollIntoView({ behavior: 'smooth' });
  }

  scrolled: boolean | unknown = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.scrolled = window.scrollY > 10;

  }
}
