import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Store1PageRoutingModule } from './store1-routing.module';

import { Store1Page } from './store1.page';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Store1PageRoutingModule
  ],
  declarations: [Store1Page],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class Store1PageModule {}
