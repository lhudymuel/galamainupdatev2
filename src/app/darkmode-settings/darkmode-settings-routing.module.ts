import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DarkmodeSettingsPage } from './darkmode-settings.page';

const routes: Routes = [
  {
    path: '',
    component: DarkmodeSettingsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DarkmodeSettingsPageRoutingModule {}
