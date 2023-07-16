import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Restaurant1PageRoutingModule } from './restaurant1-routing.module';

import { Restaurant1Page } from './restaurant1.page';
//add this
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
//add this

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Restaurant1PageRoutingModule
  ],
  declarations: [Restaurant1Page],
  //add this to
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class Restaurant1PageModule {}
