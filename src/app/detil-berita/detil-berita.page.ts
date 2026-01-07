import { Berita } from './../services/beritaservice.service';
import { Component, OnInit } from '@angular/core';
import { BeritaserviceService } from '../services/beritaservice.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detil-berita',
  templateUrl: './detil-berita.page.html',
  styleUrls: ['./detil-berita.page.scss'],
})
export class DetilBeritaPage implements OnInit {
  berita: any;
  fotoList: string[] = [];
  id: number = 0; //untuk id berita
  comments: { komenID:string, userName: string; userPhoto?: string; text: string; date: string }[] = [];
  newComment = '';
  // currentUserName: string = '';
  currentUserEmail: string = '';
  // currentUserPhoto: string = '';

  constructor(
    private route: ActivatedRoute,
    private beritaservice: BeritaserviceService
  ) {}

  ngOnInit() {
    // Ambil ID dari parameter URL (idBerita sesuai routing)
    const idParam = this.route.snapshot.paramMap.get('idBerita');
    this.id = Number(idParam) || 0;
    
    // this.loadCurrentUser();
    const user = JSON.parse(localStorage.getItem('logged') || '{}');
    this.currentUserEmail = user.accountEmail || '';
    
    // Tambah view hitungan server-side (optional)
    this.beritaservice.addViewBerita(this.id).subscribe();

    if (this.id > 0) {
      this.loadDetailBerita();
      this.loadComments();
    }
  }

  loadDetailBerita() {
    this.beritaservice.getDetailBerita(this.id, this.currentUserEmail).subscribe((res: any) => {
      if (res.result === 'OK') {
        this.berita = res.data;
        
        // Pastikan foto utama tetap tampil walau foto_list kosong
        this.fotoList = res.data.foto_list && res.data.foto_list.length
          ? res.data.foto_list
          : [res.data.foto].filter(Boolean);
        
      }
    });
  }

  beriRating(bintang: number) {
    this.beritaservice.updateRating(this.id, bintang, this.currentUserEmail).subscribe((res: any) => {
      if (res.result === 'OK') {
        // this.berita.rating = res.newRating;
        // this.berita.jumlah_review = res.newJumlahReview;
        console.log('Rating berhasil dikirim:', res);
        alert('Terima kasih atas ratingnya!');
        this.loadDetailBerita();
      }
      else {
        console.log('Gagal mengirim rating:', res);
        alert('Gagal mengirim rating: ' + res.message);
      }
    });
  }

  toggleFavorite() { 
    // const favRaw = localStorage.getItem('favorites') || '[]';
    // const favList: number[] = JSON.parse(favRaw);

    if (this.berita.is_favorit == 'TRUE') {
      // const updated = favList.filter((x) => x !== this.id);
      // localStorage.setItem('favorites', JSON.stringify(updated));
      // this.isFavorite = false;
      this.beritaservice.hapusFavoritBerita(this.id, this.currentUserEmail).subscribe((res: any) => {
        if (res.result === 'OK') {
          this.berita.is_favorit = 'FALSE';
        }
      });
    } else {
      // favList.push(this.id);
      // localStorage.setItem('favorites', JSON.stringify(favList));
      // this.isFavorite = true;
      this.beritaservice.tambahFavoritBerita(this.id, this.currentUserEmail).subscribe((res: any) => {
        if (res.result === 'OK') {
          this.berita.is_favorit = 'TRUE';
        }
      });
    }
  }

  loadComments() { 
    // const raw = localStorage.getItem('comments') || '{}';
    // const data = JSON.parse(raw);
    // const list = data[this.id] || [];

    // // Backward compatibility: map old {user} shape to new {userName, userEmail}
    // this.comments = list.map((c: any) => ({
    //   userName: c.userName || c.user || c.userEmail || 'Pengguna tidak diketahui',
    //   userEmail: c.userEmail || '',
    //   userPhoto: c.userPhoto || '',
    //   text: c.text,
    //   date: c.date,
    // }));

    this.beritaservice.getKomentarBerita(this.id).subscribe((res: any) => {
      if (res.result === 'OK') {
        this.comments = res.data.map((c: any) => ({
          komenID: c.id,
          userName: c.nama_user || 'Pengguna tidak diketahui',
          userPhoto: c.foto_user || '',
          text: c.komentar,
          date: c.tanggal,
        }));
      }
    })
  }

  addComment() {
    const text = this.newComment.trim();
    if (!text) return;

    // // Wajib login; data akun diambil dari tabel akuns lewat login dan disimpan di localStorage user_login
    // if (!this.currentUserEmail) {
    //   alert('Anda harus login untuk berkomentar.');
    //   return;
    // }

    // const raw = localStorage.getItem('comments') || '{}';
    // const data = JSON.parse(raw);

    // const comment = {
    //   userName: user.accountNama ,
    //   userEmail: ,
    //   userPhoto: user.accountFotoProfil,
    //   // userName: this.currentUserName || this.currentUserEmail,
    //   // userEmail: this.currentUserEmail,
    //   // userPhoto: this.currentUserPhoto || '',
    //   text,
    //   date: new Date().toISOString(),
    // };

    

    this.beritaservice.addKomentarBerita(this.id, this.currentUserEmail, this.newComment).subscribe((res: any) => { //! BELUM di backend
      if (res.result === 'OK') {
        alert('Komentar berhasil ditambahkan.');
        this.loadComments();
        this.newComment = '';
      }
      else {
        alert('Gagal menambahkan komentar: ' + res.message);
      }
    });

    // if (!data[this.id]) data[this.id] = [];
    // data[this.id].push(comment);

    // localStorage.setItem('comments', JSON.stringify(data));
    // this.comments = data[this.id];
    // this.newComment = '';
  }

  deleteComment(index: string) {
    const indexInt = parseInt(index);
    if (isNaN(indexInt)) {
      alert('ID komentar tidak valid.');
      return;
    }
    this.beritaservice.deleteKomentarBerita(indexInt).subscribe((res: any) => {
      if (res.result === 'OK') {
        alert('Komentar berhasil dihapus.');
        this.loadComments();
      }
      else {
        alert('Gagal menghapus komentar: ' + res.message);
      }
    });
    
  }

  // private loadCurrentUser() {
  //   const raw = localStorage.getItem('logged');
  //   if (!raw || raw === 'undefined' || raw === 'null') return;
  //   try {
  //     const u = JSON.parse(raw);
  //     this.currentUserName = u.accountNama || u.accountEmail || '';
  //     this.currentUserEmail = u.accountEmail || '';
  //     this.currentUserPhoto = u.accountFotoProfil || '';
  //   } catch (e) {
  //     console.warn('Gagal parse user_login', e);
  //   }
  // }
}
