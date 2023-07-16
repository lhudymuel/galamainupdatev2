import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Resort8PageRoutingModule } from './resort8-routing.module';

import { Resort8Page } from './resort8.page';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Resort8PageRoutingModule
  ],
  declarations: [Resort8Page],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],

})
export class Resort8PageModule {}
