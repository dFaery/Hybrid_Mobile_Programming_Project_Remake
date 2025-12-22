import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetilBeritaPage } from './detil-berita.page';

describe('DetilBeritaPage', () => {
  let component: DetilBeritaPage;
  let fixture: ComponentFixture<DetilBeritaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DetilBeritaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
