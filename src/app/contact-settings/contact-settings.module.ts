import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ContactSettingsPageRoutingModule } from './contact-settings-routing.module';

import { ContactSettingsPage } from './contact-settings.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ContactSettingsPageRoutingModule
  ],
  declarations: [ContactSettingsPage]
})
export class ContactSettingsPageModule {}
