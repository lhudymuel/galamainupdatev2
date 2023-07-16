import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Resort9PageRoutingModule } from './resort9-routing.module';

import { Resort9Page } from './resort9.page';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Resort9PageRoutingModule
  ],
  declarations: [Resort9Page],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class Resort9PageModule {}
