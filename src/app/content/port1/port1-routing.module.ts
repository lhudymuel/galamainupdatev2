import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Port1Page } from './port1.page';

const routes: Routes = [
  {
    path: '',
    component: Port1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Port1PageRoutingModule {}
