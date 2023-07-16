import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Resort2Page } from './resort2.page';

const routes: Routes = [
  {
    path: '',
    component: Resort2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Resort2PageRoutingModule {}
