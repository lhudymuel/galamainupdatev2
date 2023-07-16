import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PierPage } from './pier.page';

const routes: Routes = [
  {
    path: '',
    component: PierPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PierPageRoutingModule {}
