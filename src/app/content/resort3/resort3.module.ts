import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Resort3PageRoutingModule } from './resort3-routing.module';

import { Resort3Page } from './resort3.page';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Resort3PageRoutingModule
  ],
  declarations: [Resort3Page],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class Resort3PageModule {}
