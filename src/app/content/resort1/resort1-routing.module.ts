import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Resort1Page } from './resort1.page';

const routes: Routes = [
  {
    path: '',
    component: Resort1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Resort1PageRoutingModule {}
