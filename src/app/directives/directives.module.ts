import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SmooveDirective } from './smoove.directive';



@NgModule({
  declarations: [
    SmooveDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SmooveDirective
  ]
})
export class DirectivesModule { }
