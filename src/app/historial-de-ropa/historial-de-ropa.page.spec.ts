import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HistorialDeRopaPage } from './historial-de-ropa.page';

describe('HistorialDeRopaPage', () => {
  let component: HistorialDeRopaPage;
  let fixture: ComponentFixture<HistorialDeRopaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(HistorialDeRopaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
