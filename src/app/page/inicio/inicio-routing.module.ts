import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EncuentrosPage } from '../encuentros/encuentros.page';
import { TorneosPage } from '../torneos/torneos.page';

import { InicioPage } from './inicio.page';

const routes: Routes = [
  {
    path: '',
    component: InicioPage
  },
  {
    path: 'torneos',
    component: TorneosPage
  },
  {
    path: 'encuentros',
    component: EncuentrosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InicioPageRoutingModule {}
