import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DarkmodeSettingsPageRoutingModule } from './darkmode-settings-routing.module';

import { DarkmodeSettingsPage } from './darkmode-settings.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DarkmodeSettingsPageRoutingModule
  ],
  declarations: [DarkmodeSettingsPage]
})
export class DarkmodeSettingsPageModule {}
