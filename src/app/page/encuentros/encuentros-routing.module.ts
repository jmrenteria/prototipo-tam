import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioPage } from '../inicio/inicio.page';
import { TorneosPage } from '../torneos/torneos.page';

import { EncuentrosPage } from './encuentros.page';

const routes: Routes = [
  {
    path: '',
    component: EncuentrosPage
  },
  {
    path: 'torneos',
    component: TorneosPage
  },
  {
    path: 'encuentros',
    component: EncuentrosPage
  },
  {
    path: 'inicio',
    component: InicioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EncuentrosPageRoutingModule {}
