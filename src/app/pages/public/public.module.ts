import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from '../../components/components.module';

import { HomeComponent } from './home/home.component';
import { CoincityComponent } from './coincity/coincity.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatMenuModule } from '@angular/material/menu';
import { MatDividerModule } from '@angular/material/divider';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PublicComponent } from './public.component';
import { RouterModule } from '@angular/router';
import { DirectivesModule } from '../../directives/directives.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TermsComponent } from './terms/terms.component';
import { PolicyComponent } from './policy/policy.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NotFoundComponent } from './not-found/not-found.component';

import { SwiperModule } from 'swiper/angular';
import { TeamComponent } from './team/team.component';



@NgModule({
  declarations: [
    HomeComponent,
    PublicComponent,
    CoincityComponent,
    TermsComponent,
    PolicyComponent,
    NotFoundComponent,
    TeamComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    RouterModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    NgbModule,
    MatSidenavModule,
    MatListModule,
    MatSlideToggleModule,
    DirectivesModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    SwiperModule,
    MatMenuModule,
    MatDividerModule
  ]
})
export class PublicModule { }
