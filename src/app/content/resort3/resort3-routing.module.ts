import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Resort3Page } from './resort3.page';

const routes: Routes = [
  {
    path: '',
    component: Resort3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Resort3PageRoutingModule {}
