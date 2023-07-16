import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Port2PageRoutingModule } from './port2-routing.module';

import { Port2Page } from './port2.page';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Port2PageRoutingModule
  ],
  declarations: [Port2Page],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class Port2PageModule {}
