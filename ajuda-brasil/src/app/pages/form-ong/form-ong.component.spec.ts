import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormOngComponent } from './form-ong.component';

describe('FormOngComponent', () => {
  let component: FormOngComponent;
  let fixture: ComponentFixture<FormOngComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormOngComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormOngComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
