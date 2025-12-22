import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FavoritBeritaPage } from './favorit-berita.page';

describe('FavoritBeritaPage', () => {
  let component: FavoritBeritaPage;
  let fixture: ComponentFixture<FavoritBeritaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(FavoritBeritaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
