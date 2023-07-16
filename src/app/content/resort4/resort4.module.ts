import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Resort4PageRoutingModule } from './resort4-routing.module';

import { Resort4Page } from './resort4.page';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Resort4PageRoutingModule
  ],
  declarations: [Resort4Page],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class Resort4PageModule {}
