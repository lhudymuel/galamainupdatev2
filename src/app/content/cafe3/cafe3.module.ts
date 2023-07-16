import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Cafe3PageRoutingModule } from './cafe3-routing.module';

import { Cafe3Page } from './cafe3.page';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Cafe3PageRoutingModule
  ],
  declarations: [Cafe3Page],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class Cafe3PageModule {}
