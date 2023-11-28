import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RegistroRopaLimpiaPage } from './registro-ropa-limpia.page';

describe('RegistroRopaLimpiaPage', () => {
  let component: RegistroRopaLimpiaPage;
  let fixture: ComponentFixture<RegistroRopaLimpiaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(RegistroRopaLimpiaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
