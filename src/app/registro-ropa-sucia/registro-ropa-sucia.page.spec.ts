import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RegistroRopaSuciaPage } from './registro-ropa-sucia.page';

describe('RegistroRopaSuciaPage', () => {
  let component: RegistroRopaSuciaPage;
  let fixture: ComponentFixture<RegistroRopaSuciaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(RegistroRopaSuciaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
