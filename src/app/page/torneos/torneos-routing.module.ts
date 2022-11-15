import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EncuentrosPage } from '../encuentros/encuentros.page';
import { InicioPage } from '../inicio/inicio.page';

import { TorneosPage } from './torneos.page';

const routes: Routes = [
  {
    path: '',
    component: TorneosPage
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
export class TorneosPageRoutingModule {}
