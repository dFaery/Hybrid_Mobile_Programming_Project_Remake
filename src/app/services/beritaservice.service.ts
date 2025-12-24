import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Berita {
  id: number;
  judul: string;
  tanggalRilis: string;
  foto: string;
  fotoTambahan: string[];
  isiBerita: string;
  penerbit: string;
  rating: number;
  jumlahReview: number;
  rekomendasi: number;
  views: number;
  kategori: string[];
}

@Injectable({
  providedIn: 'root',
})
export class BeritaserviceService {
  url = 'https://ubaya.cloud/hybrid/160423183/project.php';

  constructor(private http: HttpClient) {}

  getAllBerita(): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
    });
    const body = new URLSearchParams();
    body.set('action', 'getAllBerita');
    const urlEncodedData = body.toString();

    return this.http.post(this.url, urlEncodedData, { headers });
  }

  getFavoritBerita(idUser: number): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
    });
    const body = new URLSearchParams();
    body.set('action', 'getFavoritBerita');
    body.set('idUser', idUser.toString());
    const urlEncodedData = body.toString();

    return this.http.post(this.url, urlEncodedData, { headers });
  }

  updateRatingBerita(idBerita: number): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
    });
    const body = new URLSearchParams();
    body.set('action', 'updateRatingBerita');
    body.set('idBerita', idBerita.toString());
    const urlEncodedData = body.toString();

    return this.http.post(this.url, urlEncodedData, { headers });
  }

  addViewBerita(idBerita: number): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
    });
    const body = new URLSearchParams();
    body.set('action', 'addViewBerita');
    body.set('idBerita', idBerita.toString());
    const urlEncodedData = body.toString();

    return this.http.post(this.url, urlEncodedData, { headers });
  }

  getAllKategory(): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
    });
    const body = new URLSearchParams();
    body.set('action', 'getAllKategory');
    const urlEncodedData = body.toString();
    return this.http.post(this.url, urlEncodedData, { headers });
  }

  getBeritaByKategori(id: string): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
    });
    const body = new URLSearchParams();
    body.set('action', 'getBeritaByKategori');
    body.set('id_kategori', id);

    return this.http.post(this.url, body.toString(), { headers });
  }
}
