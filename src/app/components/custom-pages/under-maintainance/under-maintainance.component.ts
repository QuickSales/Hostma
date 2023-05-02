import { DOCUMENT } from '@angular/common';
import { Component, Inject, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-under-maintainance',
  templateUrl: './under-maintainance.component.html',
  styleUrls: ['./under-maintainance.component.scss']
})
export class UnderMaintainanceComponent {

  constructor(@Inject(DOCUMENT) private document: Document,
  private renderer: Renderer2,) {}

  public days:unknown;
  public hours:unknown;
  public minutes:unknown;
  public seconds:unknown;
  ngOnInit(): void {
    this.renderer.addClass(this.document.body, 'construction-bg');
    // this.document.body.classList.add('construction-bg');

    const countDown = new Date('Dec 1, 2023 00:00:00').getTime();
    const time = setInterval(()=>{
      const now = new Date().getTime();
      const distance = countDown - now;
      this.days = Math.floor(distance / (1000 * 60 * 60 * 24));
      this.hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / ( 1000 * 60 * 60));
      this.minutes = Math.floor((distance % (1000 * 60 * 60)) / ( 1000 * 60 ));
      this.seconds = Math.floor((distance % (1000 * 60 )) / 1000);

      if(distance < 0){
        clearInterval(time);
      }
    }, 1000);
  }

  ngOnDestroy(): void {
    this.renderer.removeClass(this.document.body, 'construction-bg');
}

}
