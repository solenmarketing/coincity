import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { faInstagram, faFacebook, faTwitch, faTwitter, faGithub, faLinkedin, faYoutube  } from '@fortawesome/free-brands-svg-icons';
import { faGlobe  } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {

  titulo: string = 'Team';
  faInstagram = faInstagram;
  faFacebook = faFacebook;
  faGlobe = faGlobe;
  faTwitch = faTwitch;
  faTwitter = faTwitter;
  faGithub = faGithub;
  faLinkedin = faLinkedin;
  faYoutube = faYoutube;

  constructor(
    private title: Title
  ) { }

  ngOnInit(): void {
    this.title.setTitle('Team CoinCity')
  }

}
