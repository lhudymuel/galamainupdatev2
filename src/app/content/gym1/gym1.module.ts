import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Gym1PageRoutingModule } from './gym1-routing.module';

import { Gym1Page } from './gym1.page';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Gym1PageRoutingModule
  ],
  declarations: [Gym1Page],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class Gym1PageModule {}
