import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Resort7PageRoutingModule } from './resort7-routing.module';

import { Resort7Page } from './resort7.page';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Resort7PageRoutingModule
  ],
  declarations: [Resort7Page],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],

})
export class Resort7PageModule {}
