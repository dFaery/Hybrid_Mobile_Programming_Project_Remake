import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SemuaBeritaPage } from './semua-berita.page';

describe('SemuaBeritaPage', () => {
  let component: SemuaBeritaPage;
  let fixture: ComponentFixture<SemuaBeritaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SemuaBeritaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
