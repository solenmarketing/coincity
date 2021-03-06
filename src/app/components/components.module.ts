import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './public/share/navbar/navbar.component';
import { FooterComponent } from './public/share/footer/footer.component';

import { RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { HeaderPagesComponent } from './public/share/header-pages/header-pages.component';




@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    HeaderPagesComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    FontAwesomeModule,
    NgbModule,
    HttpClientModule
  ],
  exports: [
    NavbarComponent,
    FooterComponent,
    HeaderPagesComponent
  ]
})
export class ComponentsModule { }
