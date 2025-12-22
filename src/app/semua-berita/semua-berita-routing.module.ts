import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SemuaBeritaPage } from './semua-berita.page';

const routes: Routes = [
  {
    path: '',
    component: SemuaBeritaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SemuaBeritaPageRoutingModule {}
