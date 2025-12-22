import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KelolaAkunPage } from './kelola-akun.page';

const routes: Routes = [
  {
    path: '',
    component: KelolaAkunPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KelolaAkunPageRoutingModule {}
