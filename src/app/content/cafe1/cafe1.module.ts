import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Cafe1PageRoutingModule } from './cafe1-routing.module';

import { Cafe1Page } from './cafe1.page';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Cafe1PageRoutingModule
  ],
  declarations: [Cafe1Page],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class Cafe1PageModule {}
