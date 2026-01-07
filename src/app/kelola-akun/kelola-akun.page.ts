import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { AkunService, Akun } from '../services/akun.service';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
@Component({
  selector: 'app-kelola-akun',
  templateUrl: './kelola-akun.page.html',
  styleUrls: ['./kelola-akun.page.scss'],
})
export class KelolaAkunPage implements OnInit {
  akun: Akun = {
    accountEmail: '',
    accountPass: '',
    accountNama: '',
    accountGender: '',
    accountAlamat: '',
    accountTanggalLahir: '',
    accountFotoProfil: '',
  };
  constructor(
    private root: AppComponent,
    private akunService: AkunService,
    private alertCtrl: AlertController
  ) {}

  ngOnInit() {}

  logout() {
    this.root.logout();
  }

  ionViewWillEnter() {
    this.loadUserData();
  }

  private loadUserData() {
    const data = localStorage.getItem('logged');

      try {
        const user = JSON.parse(data!);
        this.akun = {
          accountEmail: user.accountEmail || '',
          accountPass: user.accountPass || '',
          accountNama: user.accountNama || '',
          accountGender: user.accountGender || '',
          accountAlamat: user.accountAlamat || '',
          accountTanggalLahir: user.accountTanggalLahir || '',
          accountFotoProfil: user.accountFotoProfil || 'default.png',
        };
      } catch (e) {
        console.error('Gagal parse JSON', e);
      }
  }

  discardChanges() {
    this.loadUserData();
  }

  async saveChanges() {
    this.akunService.update(this.akun).subscribe(async (res: any) => {
      if (res.result === 'OK') {
        // Update local storage agar perubahan langsung terlihat di seluruh aplikasi
        localStorage.setItem('logged', JSON.stringify(this.akun));

        const alert = await this.alertCtrl.create({
          header: 'Berhasil',
          message: 'Perubahan berhasil disimpan!',
          buttons: ['OK'],
        });
        await alert.present();
      } else {
        console.log("ada masalah");
      }
    });
  }
}
