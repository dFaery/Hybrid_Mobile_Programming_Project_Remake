import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'semua-berita',
    loadChildren: () => import('./semua-berita/semua-berita.module').then( m => m.SemuaBeritaPageModule)
  },
  {
    path: 'detil-berita/:idBerita',
    loadChildren: () => import('./detil-berita/detil-berita.module').then( m => m.DetilBeritaPageModule)
  },
  {
    path: 'favorit-berita',
    loadChildren: () => import('./favorit-berita/favorit-berita.module').then( m => m.FavoritBeritaPageModule)
  },
  {
    path: 'kelola-akun',
    loadChildren: () => import('./kelola-akun/kelola-akun.module').then( m => m.KelolaAkunPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
