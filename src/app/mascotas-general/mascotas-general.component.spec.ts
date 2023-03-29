import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MascotasGeneralComponent } from './mascotas-general.component';

describe('MascotasGeneralComponent', () => {
  let component: MascotasGeneralComponent;
  let fixture: ComponentFixture<MascotasGeneralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MascotasGeneralComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MascotasGeneralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
