import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  @ViewChild('land') land: ElementRef | undefined
  
  constructor() {
    
  }
  
  ngOnInit(): void {
  }
  
  lands() {
    this.land?.nativeElement.scrollIntoView({ behavior: 'smooth' })
  }

}
