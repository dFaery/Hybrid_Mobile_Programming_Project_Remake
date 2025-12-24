import { Component, OnInit } from '@angular/core';
import {
  BeritaserviceService,
  Berita,
} from '../services/beritaservice.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-semua-berita',
  templateUrl: './semua-berita.page.html',
  styleUrls: ['./semua-berita.page.scss'],
})
export class SemuaBeritaPage implements OnInit {

  ngOnInit() {}

  beritaSaya: any[] = [];
  daftarKategori: string[] = ['trending', 'economics', 'technology', 'law'];

  formBerita = {
    judul: '',
    deskripsi: '',
    foto: '',
    kategori: [],
  };

  constructor(
    private beritaservice: BeritaserviceService,
    private toastCtrl: AlertController
  ) {}

  // Pengecekan Judul Duplikat
  async simpanBerita(modal: any) {
    // 1. Cek apakah judul sudah ada di list (Poin 5)
    const isExist = this.beritaSaya.some(
      (b) => b.judul.toLowerCase() === this.formBerita.judul.toLowerCase()
    );

    if (isExist) {
      const alert = await this.toastCtrl.create({
        header: 'Error',
        message: 'Judul berita sudah pernah dibuat!',
        buttons: ['OK'],
      });
      await alert.present();
      return;
    }

    // 2. Jika aman, kirim ke Web Service
    // logic kirim http post ke PHP...
    console.log('Data siap kirim:', this.formBerita);

    // 3. Close modal & reset form
    modal.dismiss();
    this.resetForm();
  }

  resetForm() {
    this.formBerita = { judul: '', deskripsi: '', foto: '', kategori: [] };
  }

  hapusBerita(id: number) {
    console.log('Menghapus berita id:', id);
    // Logika hapus nanti di sini
  }

}
