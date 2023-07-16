import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Cafe2Page } from './cafe2.page';

const routes: Routes = [
  {
    path: '',
    component: Cafe2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Cafe2PageRoutingModule {}
