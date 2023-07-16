import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Cafe3Page } from './cafe3.page';

const routes: Routes = [
  {
    path: '',
    component: Cafe3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Cafe3PageRoutingModule {}
