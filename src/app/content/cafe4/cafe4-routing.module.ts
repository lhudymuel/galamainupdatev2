import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Cafe4Page } from './cafe4.page';

const routes: Routes = [
  {
    path: '',
    component: Cafe4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Cafe4PageRoutingModule {}
