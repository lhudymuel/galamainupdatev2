import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Resort8Page } from './resort8.page';

const routes: Routes = [
  {
    path: '',
    component: Resort8Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Resort8PageRoutingModule {}
