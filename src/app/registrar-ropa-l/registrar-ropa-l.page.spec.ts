import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RegistrarRopaLPage } from './registrar-ropa-l.page';

describe('RegistrarRopaLPage', () => {
  let component: RegistrarRopaLPage;
  let fixture: ComponentFixture<RegistrarRopaLPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(RegistrarRopaLPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
