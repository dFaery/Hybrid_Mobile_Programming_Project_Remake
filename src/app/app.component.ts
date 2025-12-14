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
    const userLog = this.objAkun.login(this.email, this.pass);
    if(userLog){
      alert("Berhasil Login");
      this.logged = userLog;
    }
    else {
      alert("Gagal Login");
      this.logged = null;
    }
  }
  
  logout() {
    this.objAkun.logout;
    this.logged = null;
  }


}
