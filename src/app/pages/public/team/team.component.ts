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

  members = [
    {
      'img': '/assets/img/danny-marquez.png',
      'name': 'Danny Márquez',
      'job': 'CEO - Chief Executive Officer',
      'comment': 'No te preocupes por el fracaso. Sólo debes acertar una vez.',
      'ig': '',
      'fb': '',
      'web': '',
      'twt': '',
      'twc': '',
      'git': '',
      'lin': '',
      'ytb': '',
    },
    {
      'img': '/assets/img/daniel-rodriguez.png',
      'name': 'Daniel Rodríguez',
      'job': 'Developer BlockChain',
      'comment': 'Un software de poca calidad es el trabajo a tiempo completo de otro hombre.',
      'ig': '',
      'fb': '',
      'web': '',
      'twt': '',
      'twc': '',
      'git': 'https://github.com/drg809',
      'lin': 'https://es.linkedin.com/in/daniel-rodr%C3%ADguez-garc%C3%ADa-003ba4213',
      'ytb': '',
    },
    {
      'img': '/assets/img/gerardo-scollo.png',
      'name': 'Gerardo Scollo',
      'job': 'CMO - Chief Marketing Officer',
      'comment': 'Emprendedor, gamer y apasionado por las finanzas.',
      'ig': '',
      'fb': '',
      'web': '',
      'twt': 'https://twitter.com/XGerard_?t=bNtLONmOf55Cbloq0q1VPw&s=09',
      'twc': '',
      'git': '',
      'lin': '',
      'ytb': '',
    },
    {
      'img': '/assets/img/juan-molina.png',
      'name': 'Juan Molina',
      'job': 'CCO - Chief Communications Officer',
      'comment': 'Con los pies en la tierra y la mirada en el cielo. Entusiasta por el mundo cripto y gamer de corazón.',
      'ig': 'https://instagram.com/juan.molinamajek?utm_medium=copy_link',
      'fb': 'https://www.facebook.com/juan.molinamajek',
      'web': '',
      'twt': 'https://twitter.com/Juancho94296858?t=TJ7EE4-1NZc-EZui7ZfoYQ&s=09',
      'twc': '',
      'git': '',
      'lin': '',
      'ytb': '',
    },
    {
      'img': '/assets/img/leonardo-perez.png',
      'name': 'Leonardo Pérez',
      'job': 'CTO - Chief Technical Officer',
      'comment': 'Probablemente tenga una personalidad obsesiva, pero la búsqueda de la perfección me ha servido bien.',
      'ig': 'https://instagram.com/leo.lopez.338?utm_medium=copy_link',
      'fb': '',
      'web': '',
      'twt': 'https://twitter.com/Leonard15429055?t=v5UXqezTJvv-Nlfd49yFgA&s=09',
      'twc': '',
      'git': '',
      'lin': '',
      'ytb': '',
    },
    {
      'img': '/assets/img/luis-ramirez.png',
      'name': 'Luis Ramírez',
      'job': 'Graphic designer and illustrator',
      'comment': 'El esfuerzo y el aprendizaje son los pilares del éxito.',
      'ig': 'https://www.instagram.com/lrgrafico/',
      'fb': 'https://www.facebook.com/LRgrafico-107678308214348',
      'web': '',
      'twt': '',
      'twc': '',
      'git': '',
      'lin': '',
      'ytb': '',
    },
    {
      'img': '/assets/img/martin-leiva.png',
      'name': 'Martin Leiva',
      'job': 'COO - Chief Operating Officer',
      'comment': 'Apasionado por el mundo de los juegos y la computación.',
      'ig': '',
      'fb': '',
      'web': '',
      'twt': 'https://twitter.com/search?q=%40MartinLeiva1978&t=x4tYFvC3pmn5GrWqwjJ9nQ&s=09',
      'twc': '',
      'git': '',
      'lin': '',
      'ytb': '',
    },
    {
      'img': '/assets/img/romano-stallocca.png',
      'name': 'Romano Stallocca',
      'job': 'CDO - Chief Digital Officer',
      'comment': 'Emprendedor apasionado por los videojuegos, criptomonedas, streamer por diversión.',
      'ig': 'https://www.instagram.com/romanostallocca/',
      'fb': '',
      'web': '',
      'twt': '',
      'twc': 'https://www.twitch.tv/FuryusARG',
      'git': '',
      'lin': '',
      'ytb': '',
    },
    {
      'img': '/assets/img/solenmarketing.png',
      'name': 'SolenMarketing',
      'job': 'Diseño y Desarrollo Web',
      'comment': 'Un sitio web exitoso es el resultado del equilibrio entre tecnologías y conocimiento.',
      'ig': 'https://instagram.com/solenmarketing/',
      'fb': 'https://facebook.com/solenmarketing',
      'web': 'https://solenmarketing.com/',
      'twt': '',
      'twc': '',
      'git': '',
      'lin': '',
      'ytb': '',
    },
    {
      'img': '/assets/img/nicolas-gonzalez.png',
      'name': 'Nicolás González',
      'job': 'Developer Game',
      'comment': 'Encuentra lo que te hace feliz y ve hacia ello.',
      'ig': '',
      'fb': '',
      'web': '',
      'twt': 'https://twitter.com/godofredohh',
      'twc': 'https://www.twitch.tv/godofredohhdev',
      'git': '',
      'lin': '',
      'ytb': 'https://www.youtube.com/channel/UCgWR3_4ngTCgGSrDy0hZbag',
    },
    {
      'img': '/assets/img/marcos-ottonelli.png',
      'name': 'Marcos Ottonelli',
      'job': 'Digital Marketing Director',
      'comment': 'Community Management & Manager. No hay mayor éxito personal, que el éxito de mis clientes.',
      'ig': 'https://www.instagram.com/mktgrow.official/',
      'fb': '',
      'web': '',
      'twt': '',
      'twc': '',
      'git': '',
      'lin': '',
      'ytb': '',
    }
  ]

  constructor(
    private title: Title
  ) { }

  ngOnInit(): void {
    this.title.setTitle('Team CoinCity')
  }

}
