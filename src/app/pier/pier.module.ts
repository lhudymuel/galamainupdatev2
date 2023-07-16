import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PierPageRoutingModule } from './pier-routing.module';

import { PierPage } from './pier.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PierPageRoutingModule
  ],
  declarations: [PierPage]
})
export class PierPageModule {}
