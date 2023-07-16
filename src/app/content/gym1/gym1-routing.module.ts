import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Gym1Page } from './gym1.page';

const routes: Routes = [
  {
    path: '',
    component: Gym1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Gym1PageRoutingModule {}
