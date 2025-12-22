import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-kelola-akun',
  templateUrl: './kelola-akun.page.html',
  styleUrls: ['./kelola-akun.page.scss'],
})
export class KelolaAkunPage implements OnInit {

  constructor(private root:AppComponent) { }

  ngOnInit() {
  }

  logout(){
    this.root.logout();
  }

}
