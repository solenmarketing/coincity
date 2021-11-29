import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-policy',
  templateUrl: './policy.component.html',
  styleUrls: ['./policy.component.scss']
})
export class PolicyComponent implements OnInit {

  titulo: string = 'Políticas de privacidad'

  constructor(
    private title: Title
  ) { }

  ngOnInit(): void {
    this.title.setTitle('Políticas de privacidad - CoinCity')
  }

}
