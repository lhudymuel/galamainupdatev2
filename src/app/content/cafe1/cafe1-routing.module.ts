import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Cafe1Page } from './cafe1.page';

const routes: Routes = [
  {
    path: '',
    component: Cafe1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Cafe1PageRoutingModule {}
