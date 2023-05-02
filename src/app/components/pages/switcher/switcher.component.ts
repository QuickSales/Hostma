import { DOCUMENT } from '@angular/common';
import { Component, ElementRef, Inject, OnInit, Renderer2, ViewChild } from '@angular/core';
import {  NgbModal, NgbOffcanvas, OffcanvasDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import * as switcher from 'src/app/shared/components/switcher/switcher';

@Component({
  selector: 'app-switcher',
  templateUrl: './switcher.component.html',
  styleUrls: ['./switcher.component.scss'],
})
export class SwitcherComponent  implements OnInit {
  public localDark = localStorage;
  public localRtl = localStorage;
  public localBoxed = localStorage;
  closeResult = '';
  // html = document.querySelector('html');
  color1 = "#1457e6";

  ngOnInit(): void {
    this.renderer.addClass(this.document.body, 'custom-page');
  }

  ngOnDestroy(): void {
    this.renderer.removeClass(this.document.body, 'custom-page');
}
  @ViewChild('switcher', { static: false }) switcher!: ElementRef;

  constructor(private offcanvasService: NgbOffcanvas,
    @Inject(DOCUMENT) private document: Document,
    private renderer: Renderer2,
    private modalService: NgbModal) {

    this.localbackup();
  }
  
  open(content: unknown) {
    // let session: any = document.querySelector("html")?.getAttribute('dir') == 'rtl' ? { ariaLabelledBy: 'offcanvas-basic-title' } : { position: 'end' }
    this.offcanvasService.open(content,{ position: 'end' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });

  }

  themeChange(type: string) {
    document.querySelector("html")?.setAttribute("data-theme-mode", type);
    localStorage.setItem("hostma-theme-mode", type);

  }

  DirectionsChange(type: string) {
    document.querySelector("html")?.setAttribute("dir", type);
    localStorage.setItem("hostma-dir-mode", type);
    if (type == 'rtl') {
      const styleId = document.querySelector('#style');
      styleId?.setAttribute('href', './assets/libs/bootstrap/css/bootstrap.rtl.min.css');
      // console.log("rtl")
    }
    else {
      const styleId = document.querySelector('#style');

      styleId?.setAttribute('href', './assets/libs/bootstrap/css/bootstrap.min.css');
    }

  }
  widthChange(type: string) {
    document.querySelector("html")?.setAttribute("data-width", type);
    localStorage.setItem("hostma-width-mode", type);

  }
  Primary(type: string) {
    document.querySelector("html")?.setAttribute("style", type);
    localStorage.setItem("hostma-primary-mode", type);

  }

  Primary1(type: string) {
    document.querySelector("html")?.setAttribute("style", type);
    localStorage.setItem("hostma-primary-mode", type);

  }

  background(type: string, event: string) {
    document.querySelector("html")?.setAttribute("style", type);
    localStorage.setItem("hostma-background-mode", type);
    document.querySelector("html")?.setAttribute("data-theme-mode", event);
    localStorage.setItem("hostma-theme-mode", event);
  }

  mychange(event: any, type: any) {
    console.log(event.color);

    const changechange = event.color;
    switcher.dynamicDarkBodyColor(changechange, document.querySelector("html"));
    document.querySelector("html")?.setAttribute("data-theme-mode", type);
    localStorage.setItem("hostma-theme-mode", type);
  }

  public dynamicDarkBg(event: any, type: any) {
    console.log(event.color);
    const dynamicBodyDark = event.color;
    switcher.dynamicDarkColor(dynamicBodyDark, document.querySelector("html"));

    document.querySelector("html")?.setAttribute("data-theme-mode", type);
    localStorage.setItem("hostma-theme-mode", type);

  }
  localbackup() {
    if (localStorage.getItem("hostma-theme-mode")) {
      const type: any = localStorage.getItem("hostma-theme-mode");
      document.querySelector("html")?.setAttribute("data-theme-mode", type);
    }

    if (localStorage.getItem("hostma-dir-mode")) {
      const type: any = localStorage.getItem("hostma-dir-mode");
      document.querySelector("html")?.setAttribute("dir", type);
      if (type == 'rtl') {
        const styleId = document.querySelector('#style');
        styleId?.setAttribute('href', './assets/libs/bootstrap/css/bootstrap.rtl.min.css');
        // console.log("rtl")
      }
      else {
        const styleId = document.querySelector('#style');

        styleId?.setAttribute('href', './assets/libs/bootstrap/css/bootstrap.min.css');
      }

    }
    if (localStorage.getItem("hostma-width-mode")) {
      const type: any = localStorage.getItem("hostma-width-mode");
      document.querySelector("html")?.setAttribute("data-width", type);
    }
    if (localStorage.getItem("hostma-background-mode")) {
      const type: any = localStorage.getItem("hostma-background-mode");
      document.querySelector("html")?.setAttribute("style", type);
    }
    if (localStorage.getItem("hostma-primary-mode")) {
      const type: any = localStorage.getItem("hostma-primary-mode");
      document.querySelector("html")?.setAttribute("style", type);
    }
    if (localStorage.getItem("hostmabg-color")) {
      const event: any = localStorage.getItem("hostmabg-color");
      document.querySelector("html")?.setAttribute("style", event);
      localStorage.getItem(event.color);

    }

  }

  reset(){

    document.querySelector("html")?.setAttribute("data-theme-mode",'light');
    localStorage.setItem("hostma-theme-mode", 'light');
    const btnlight = document.getElementById('switcher-light-theme') as HTMLInputElement;
    btnlight.checked = true;
    document.querySelector("html")?.setAttribute("dir","ltr");
    localStorage.setItem("hostma-dir-mode", "ltr");
    const ltr = document.getElementById('switcher-ltr') as HTMLInputElement;
    ltr.checked = true;
    document.querySelector("html")?.setAttribute("data-width","full-width");
    localStorage.setItem("hostma-width-mode", "full-width");
    const fullwidth = document.getElementById('switcher-full-width') as HTMLInputElement;
    fullwidth.checked = true;

    localStorage.clear();
    const html:any = document.querySelector('html');

    html.style = '';
    html?.classList.remove('rtl');
    html?.classList.remove('switcher-dark-theme');
    html?.classList.remove('layout-boxed');

    html.setAttribute('dir', 'ltr');
    const styleId = document.querySelector('#style');
    styleId?.setAttribute('href', './assets/libs/bootstrap/css/bootstrap.min.css');
    localStorage.removeItem('hostmahorizontal');
    localStorage.removeItem('hostmahorizontalHover');

  }
  openModal(content1: any) {
    this.modalService.open(content1, { modalDialogClass:'buynow', ariaLabelledBy: 'modal-basic-title' }).result.then(
			(result) => {
				this.closeResult = `Closed with: ${result}`;
			},
			(reason) => {
				this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
			},
		);
  }
  private getDismissReason(reason: any): string {
    if (reason === OffcanvasDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === OffcanvasDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on the backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
}
