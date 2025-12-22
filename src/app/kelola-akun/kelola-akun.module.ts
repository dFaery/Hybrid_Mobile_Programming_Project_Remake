import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KelolaAkunPageRoutingModule } from './kelola-akun-routing.module';

import { KelolaAkunPage } from './kelola-akun.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    KelolaAkunPageRoutingModule
  ],
  declarations: [KelolaAkunPage]
})
export class KelolaAkunPageModule {}
