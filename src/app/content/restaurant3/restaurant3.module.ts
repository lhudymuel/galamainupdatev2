import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Restaurant3PageRoutingModule } from './restaurant3-routing.module';

import { Restaurant3Page } from './restaurant3.page';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Restaurant3PageRoutingModule
  ],
  declarations: [Restaurant3Page],
  //add this to
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class Restaurant3PageModule {}

