import { Component, HostListener } from '@angular/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-linux-shared-hosting',
  templateUrl: './linux-shared-hosting.component.html',
  styleUrls: ['./linux-shared-hosting.component.scss']
})
export class LinuxSharedHostingComponent {
  closeResult!: string;
  constructor(private modalService: NgbModal) { }
  scroll(el: HTMLElement) {
    el.scrollIntoView({ behavior: 'smooth' });
  }

  scrolled: boolean | unknown = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.scrolled = window.scrollY > 10;

  }
  openModal(content2: any) {
    this.modalService.open(content2, { modalDialogClass:'modal-dialog modal-lg modal-dialog-centered', ariaLabelledBy: 'modal-unmetered' }).result.then(
			(result) => {
				this.closeResult = `Closed with: ${result}`;
			},
			(reason) => {
				this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
			},
		);
  }
  private getDismissReason(reason: any): string {
		if (reason === ModalDismissReasons.ESC) {
			return 'by pressing ESC';
		} else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
			return 'by clicking on a backdrop';
		} else {
			return `with: ${reason}`;
		}
	}
}
