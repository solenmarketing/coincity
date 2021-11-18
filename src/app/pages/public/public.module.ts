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

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PublicComponent } from './public.component';
import { RouterModule } from '@angular/router';
import { DirectivesModule } from '../../directives/directives.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



@NgModule({
  declarations: [
    HomeComponent,
    PublicComponent,
    CoincityComponent
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
    BrowserAnimationsModule
  ]
})
export class PublicModule { }
