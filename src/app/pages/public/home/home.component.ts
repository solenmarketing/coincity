import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  @ViewChild('land') land: ElementRef | undefined

  constructor() { }

  ngOnInit(): void {
  }

  lands() {
    this.land?.nativeElement.scrollIntoView({ behavior: 'smooth' })
  }

}
