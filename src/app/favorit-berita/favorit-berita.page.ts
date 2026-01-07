import { Component, OnInit } from '@angular/core';
import { BeritaserviceService } from '../services/beritaservice.service';

@Component({
  selector: 'app-favorit-berita',
  templateUrl: './favorit-berita.page.html',
  styleUrls: ['./favorit-berita.page.scss'],
})
export class FavoritBeritaPage implements OnInit {
  favoritBerita: any[] = [];

  constructor(private beritaservice: BeritaserviceService) {}

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.loadFavoritBerita();
  }

  loadFavoritBerita() {
    const emailUser = JSON.parse(localStorage.getItem('logged') || 'null')?.accountEmail || '';
    this.beritaservice.getFavoritBerita(emailUser).subscribe((response) => {
      if (response.result === 'OK') {
        this.favoritBerita = response.data;
      } else {  
        this.favoritBerita = [];
      }
    });
  }
}
