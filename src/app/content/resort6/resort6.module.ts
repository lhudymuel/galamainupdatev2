import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Resort6PageRoutingModule } from './resort6-routing.module';

import { Resort6Page } from './resort6.page';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Resort6PageRoutingModule
  ],
  declarations: [Resort6Page],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class Resort6PageModule {}
