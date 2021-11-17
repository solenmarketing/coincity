import { Component, OnInit } from '@angular/core';
import { faInstagram, faDiscord, faTwitter, faFacebook, faTwitch, faYoutube } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  faDiscord = faDiscord
  faTwitter = faTwitter
  faInstagram = faInstagram
  faFacebook = faFacebook
  faYoutube = faYoutube
  faTwitch = faTwitch

  year: number = 0


  constructor() { }

  ngOnInit(): void {
    this.year = new Date().getFullYear()
  }

}
