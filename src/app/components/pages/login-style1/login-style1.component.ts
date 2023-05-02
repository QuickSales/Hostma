import { DOCUMENT } from '@angular/common';
import { Component, Inject, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-login-style1',
  templateUrl: './login-style1.component.html',
  styleUrls: ['./login-style1.component.scss']
})
export class LoginStyle1Component {
  constructor(@Inject(DOCUMENT) private document: Document,
  private renderer: Renderer2,) {}

  ngOnInit(): void {
    this.renderer.addClass(this.document.body, 'custom-page');
  }

  ngOnDestroy(): void {
    this.renderer.removeClass(this.document.body, 'custom-page');
}
}
