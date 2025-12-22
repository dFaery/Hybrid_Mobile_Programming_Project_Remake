import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FavoritBeritaPage } from './favorit-berita.page';

const routes: Routes = [
  {
    path: '',
    component: FavoritBeritaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FavoritBeritaPageRoutingModule {}
