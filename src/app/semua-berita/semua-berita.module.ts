import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SemuaBeritaPageRoutingModule } from './semua-berita-routing.module';

import { SemuaBeritaPage } from './semua-berita.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SemuaBeritaPageRoutingModule
  ],
  declarations: [SemuaBeritaPage]
})
export class SemuaBeritaPageModule {}
