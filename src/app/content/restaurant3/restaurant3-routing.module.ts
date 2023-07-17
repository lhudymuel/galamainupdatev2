import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Restaurant3Page } from './restaurant3.page';

const routes: Routes = [
  {
    path: '',
    component: Restaurant3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Restaurant3PageRoutingModule {}
