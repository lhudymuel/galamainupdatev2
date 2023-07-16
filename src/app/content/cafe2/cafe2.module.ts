import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Cafe2PageRoutingModule } from './cafe2-routing.module';

import { Cafe2Page } from './cafe2.page';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Cafe2PageRoutingModule
  ],
  declarations: [Cafe2Page],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class Cafe2PageModule {}
