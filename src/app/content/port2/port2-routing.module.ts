import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Port2Page } from './port2.page';

const routes: Routes = [
  {
    path: '',
    component: Port2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Port2PageRoutingModule {}
