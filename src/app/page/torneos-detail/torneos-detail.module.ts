import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TorneosDetailPageRoutingModule } from './torneos-detail-routing.module';

import { TorneosDetailPage } from './torneos-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TorneosDetailPageRoutingModule
  ],
  declarations: [TorneosDetailPage]
})
export class TorneosDetailPageModule {}
