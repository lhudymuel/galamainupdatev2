import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Resort7Page } from './resort7.page';

const routes: Routes = [
  {
    path: '',
    component: Resort7Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Resort7PageRoutingModule {}
