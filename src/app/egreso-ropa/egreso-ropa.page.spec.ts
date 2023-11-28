import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EgresoRopaPage } from './egreso-ropa.page';

describe('EgresoRopaPage', () => {
  let component: EgresoRopaPage;
  let fixture: ComponentFixture<EgresoRopaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(EgresoRopaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
