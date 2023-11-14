import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EgresoRopaLimpiaPage } from './egreso-ropa-limpia.page';

describe('EgresoRopaLimpiaPage', () => {
  let component: EgresoRopaLimpiaPage;
  let fixture: ComponentFixture<EgresoRopaLimpiaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(EgresoRopaLimpiaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
