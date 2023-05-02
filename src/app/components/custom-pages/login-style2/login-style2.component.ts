import { DOCUMENT } from '@angular/common';
import { Component, Inject, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-login-style2',
  templateUrl: './login-style2.component.html',
  styleUrls: ['./login-style2.component.scss']
})
export class LoginStyle2Component {
  constructor(@Inject(DOCUMENT) private document: Document,
  private renderer: Renderer2,) {}

  ngOnInit(): void {
    this.renderer.addClass(this.document.body, 'custom-bg');
  }

  ngOnDestroy(): void {
    this.renderer.removeClass(this.document.body, 'custom-bg');
}

}
