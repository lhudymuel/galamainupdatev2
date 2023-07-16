import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Resort4Page } from './resort4.page';

const routes: Routes = [
  {
    path: '',
    component: Resort4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Resort4PageRoutingModule {}
