import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetilBeritaPage } from './detil-berita.page';

const routes: Routes = [
  {
    path: '',
    component: DetilBeritaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetilBeritaPageRoutingModule {}
