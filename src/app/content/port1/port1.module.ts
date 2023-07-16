import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Port1PageRoutingModule } from './port1-routing.module';

import { Port1Page } from './port1.page';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Port1PageRoutingModule
  ],
  declarations: [Port1Page],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class Port1PageModule {}
