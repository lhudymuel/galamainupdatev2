import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Resort2PageRoutingModule } from './resort2-routing.module';

import { Resort2Page } from './resort2.page';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Resort2PageRoutingModule
  ],
  declarations: [Resort2Page],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class Resort2PageModule {}
