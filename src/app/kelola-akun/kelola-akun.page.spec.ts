import { ComponentFixture, TestBed } from '@angular/core/testing';
import { KelolaAkunPage } from './kelola-akun.page';

describe('KelolaAkunPage', () => {
  let component: KelolaAkunPage;
  let fixture: ComponentFixture<KelolaAkunPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(KelolaAkunPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
