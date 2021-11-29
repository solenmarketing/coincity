import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-terms',
  templateUrl: './terms.component.html',
  styleUrls: ['./terms.component.scss']
})
export class TermsComponent implements OnInit {

  titulo: string = 'Términos y Condiciones'

  constructor(
    private title: Title
  ) { }

  ngOnInit(): void {
    this.title.setTitle('Términos y Condiciones')
  }

}
