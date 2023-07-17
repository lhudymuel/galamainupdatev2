import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Restaurant2PageRoutingModule } from './restaurant2-routing.module';

import { Restaurant2Page } from './restaurant2.page';

import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Restaurant2PageRoutingModule
  ],
  declarations: [Restaurant2Page],
  //add this to
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class Restaurant2PageModule {}
