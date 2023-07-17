import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Restaurant2Page } from './restaurant2.page';

const routes: Routes = [
  {
    path: '',
    component: Restaurant2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Restaurant2PageRoutingModule {}
