import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgbModal, ModalDismissReasons, NgbAlertConfig } from '@ng-bootstrap/ng-bootstrap';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger('fadeInLeft', [
      state('void', style({
        transform: 'translateX(-50%)',
        opacity: 0
      })),
      transition(':enter', [
        animate(300, style({
          transform: 'translateX(0)',
          opacity: 1
        }))
      ])
    ]),
    trigger('fadeInRight', [
      state('void', style({
        transform: 'translateX(50%)',
        opacity: 0
      })),
      transition(':enter', [
        animate(300, style({
          transform: 'translateX(0)',
          opacity: 1
        }))
      ])
    ])
  ]
})
export class HomeComponent implements OnInit {

  @ViewChild('land') land: ElementRef | undefined

  closeResult = '';



  constructor(
    private modalService: NgbModal,
    private alertConfig: NgbAlertConfig,
    private title: Title
  ) { }

  ngOnInit(): void {
    // Aos.init({
    //   duration: 1200,
    // });
    this.title.setTitle('Bienvenido a CoinCity')
  }

  lands() {
    this.land?.nativeElement.scrollIntoView({ behavior: 'smooth' })
  }

  open(content: any) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title', size: 'lg', scrollable: true }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
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
