import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetilBeritaPageRoutingModule } from './detil-berita-routing.module';

import { DetilBeritaPage } from './detil-berita.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetilBeritaPageRoutingModule
  ],
  declarations: [DetilBeritaPage]
})
export class DetilBeritaPageModule {}
