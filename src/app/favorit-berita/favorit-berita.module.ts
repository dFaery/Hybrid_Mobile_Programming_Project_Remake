import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FavoritBeritaPageRoutingModule } from './favorit-berita-routing.module';

import { FavoritBeritaPage } from './favorit-berita.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FavoritBeritaPageRoutingModule
  ],
  declarations: [FavoritBeritaPage]
})
export class FavoritBeritaPageModule {}
