import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Cafe4PageRoutingModule } from './cafe4-routing.module';

import { Cafe4Page } from './cafe4.page';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Cafe4PageRoutingModule
  ],
  declarations: [Cafe4Page],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class Cafe4PageModule {}
