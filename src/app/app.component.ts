import { Component } from '@angular/core';
import { AkunService, Akun } from './services/akun.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  email: string = '';
  pass: string = '';
  logged: Akun | null = null;
  
  constructor(private objAkun: AkunService ) {
    this.logged = JSON.parse(localStorage.getItem('logged') || 'null');
  }

  login() {
    this.objAkun.login(this.email, this.pass).subscribe((respon:any)=>{
      if(respon.result === "success"){
        this.logged = {
          accountEmail: respon.email,
          accountPass: respon.password,
          accountNama: respon.nama,
          accountGender: respon.gender,
          accountAlamat: respon.alamat,
          accountTanggalLahir: respon.tanggal_lahir,
          accountFotoProfil: respon.foto
        };  

        alert("Berhasil Login");
        localStorage.setItem('logged', JSON.stringify(this.logged));
      }
      else {
        alert("Gagal Login");
        this.logged = null;
      }
    });
  }
  
  logout() {
    this.email = "";
    this.pass = "";
    this.logged = null;
    localStorage.removeItem('logged');
  }


}
