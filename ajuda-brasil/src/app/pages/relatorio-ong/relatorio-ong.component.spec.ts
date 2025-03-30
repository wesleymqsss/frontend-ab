import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RelatorioOngComponent } from './relatorio-ong.component';

describe('RelatorioOngComponent', () => {
  let component: RelatorioOngComponent;
  let fixture: ComponentFixture<RelatorioOngComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RelatorioOngComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RelatorioOngComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
