import { Component, OnInit } from '@angular/core';
import { BeritaserviceService } from '../services/beritaservice.service';

@Component({
  selector: 'app-favorit-berita',
  templateUrl: './favorit-berita.page.html',
  styleUrls: ['./favorit-berita.page.scss'],
})
export class FavoritBeritaPage implements OnInit {
  favoritBerita: any[] = [];
  idUser: number = 1;

  constructor(private beritaservice: BeritaserviceService) { }

  ngOnInit() {
    // Fitur favorit dinonaktifkan - memerlukan tabel favorit di database
    // this.loadFavoritBerita();
  }

  ionViewWillEnter() {
    // Fitur favorit dinonaktifkan - memerlukan tabel favorit di database
    // this.loadFavoritBerita();
  }

  loadFavoritBerita() {
    // FITUR FAVORIT TIDAK AKTIF - memerlukan tabel favorit di database
    // Uncomment code di bawah jika sudah menambahkan tabel favorit ke database
    
    /*
    const logged = JSON.parse(localStorage.getItem('logged') || 'null');
    if (logged && logged.accountId) {
      this.idUser = logged.accountId;
      this.beritaservice.getFavoritBerita(this.idUser).subscribe((response) => {
        if (response.result === 'OK') {
          this.favoritBerita = response.data;
        } else {
          this.favoritBerita = [];
        }
      });
    }
    */
  }

}
