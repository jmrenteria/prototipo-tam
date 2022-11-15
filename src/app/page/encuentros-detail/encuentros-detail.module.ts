import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EncuentrosDetailPageRoutingModule } from './encuentros-detail-routing.module';

import { EncuentrosDetailPage } from './encuentros-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EncuentrosDetailPageRoutingModule
  ],
  declarations: [EncuentrosDetailPage]
})
export class EncuentrosDetailPageModule {}
