import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EncuentrosDetailPage } from './encuentros-detail.page';

const routes: Routes = [
  {
    path: '',
    component: EncuentrosDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EncuentrosDetailPageRoutingModule {}
