import {
  BeritaserviceService,
  Berita,
} from '../services/beritaservice.service';
import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {
  constructor(
    private route: ActivatedRoute,
    public beritaservice: BeritaserviceService //jangan ditanya kenapa begitu, tp emg begini dr ionicnya :v
  ) {}
  berita: any;
  jenisTampilan: any;
  beritaDicari: string = '';
  semuaBerita: any[] = [];
  hasilPencarian: any[] = [];
  categories: any[] = [];

  // untuk fitur search
  cariBeritaByJudul() {
    const lowerKeyword = this.beritaDicari.toLowerCase();
    this.jenisTampilan = 0;
    if (!lowerKeyword) {
      // kalau kosong, dia munculin semua berita
      this.hasilPencarian = [...this.semuaBerita];
    } else {
      this.hasilPencarian = this.semuaBerita.filter((berita) =>
        berita.judulBerita.toLowerCase().includes(lowerKeyword)
      );
    }
  }

  chunkArray(arr: any[], chunkSize: number): any[][] {
    const result = [];
    for (let i = 0; i < arr.length; i += chunkSize) {
      result.push(arr.slice(i, i + chunkSize));
    }
    return result;
  }

  isToastOpen = false;
  toastMessage = '';

  // Fungsi ini dijalankan sekali saat aplikasi dibuka (ngOnInit)
loadCategories() {
  this.beritaservice.getAllKategory().subscribe((response) => {
    if (response.result === 'OK') {
      this.categories = response.data; // Ini mengisi tab kategori
    }
  });
}

// Fungsi ini dijalankan saat user mengklik salah satu tab
pilihKategori(id: any) {
  this.jenisTampilan = id;
  this.beritaservice.getBeritaByKategori(id).subscribe((response) => {
    if (response.result === 'OK') {
      this.semuaBerita = response.data;
    }
  });
}

  ngOnInit() {
  this.loadCategories();
}
}
