import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Resort9Page } from './resort9.page';

const routes: Routes = [
  {
    path: '',
    component: Resort9Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Resort9PageRoutingModule {}
