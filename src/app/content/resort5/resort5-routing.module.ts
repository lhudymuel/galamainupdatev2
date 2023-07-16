import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Resort5Page } from './resort5.page';

const routes: Routes = [
  {
    path: '',
    component: Resort5Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Resort5PageRoutingModule {}
