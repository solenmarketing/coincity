import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-coincity',
  templateUrl: './coincity.component.html',
  styleUrls: ['./coincity.component.scss']
})
export class CoincityComponent implements OnInit {

  faMapMarkerAlt = faMapMarkerAlt

  constructor(
    private title: Title
  ) { }



  ngOnInit(): void {
    this.title.setTitle('Conoce más sobre CoinCity')
  }

}
