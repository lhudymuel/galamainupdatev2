import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Resort6Page } from './resort6.page';

const routes: Routes = [
  {
    path: '',
    component: Resort6Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Resort6PageRoutingModule {}
