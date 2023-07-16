import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Resort5PageRoutingModule } from './resort5-routing.module';

import { Resort5Page } from './resort5.page';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Resort5PageRoutingModule
  ],
  declarations: [Resort5Page],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  
})
export class Resort5PageModule {}
