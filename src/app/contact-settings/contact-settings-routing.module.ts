import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContactSettingsPage } from './contact-settings.page';

const routes: Routes = [
  {
    path: '',
    component: ContactSettingsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContactSettingsPageRoutingModule {}
