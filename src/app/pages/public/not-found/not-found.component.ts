import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss']
})
export class NotFoundComponent implements OnInit {

  titulo: string = 'Página no encontrada'

  constructor(
    private title: Title
  ) { }

  ngOnInit(): void {
    this.title.setTitle('Página no encontrada - CoinCity')
  }

}
