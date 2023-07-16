import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Resort1PageRoutingModule } from './resort1-routing.module';

import { Resort1Page } from './resort1.page';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Resort1PageRoutingModule
  ],
  declarations: [Resort1Page],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class Resort1PageModule {}
