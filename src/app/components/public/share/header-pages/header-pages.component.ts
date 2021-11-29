import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-pages',
  templateUrl: './header-pages.component.html',
  styleUrls: ['./header-pages.component.scss']
})
export class HeaderPagesComponent implements OnInit {

  @Input('titulo') titulo!: string;

  constructor() { }

  ngOnInit(): void {
  }

}
