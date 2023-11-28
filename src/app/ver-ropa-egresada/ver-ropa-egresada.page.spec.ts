import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VerRopaEgresadaPage } from './ver-ropa-egresada.page';

describe('VerRopaEgresadaPage', () => {
  let component: VerRopaEgresadaPage;
  let fixture: ComponentFixture<VerRopaEgresadaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(VerRopaEgresadaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
