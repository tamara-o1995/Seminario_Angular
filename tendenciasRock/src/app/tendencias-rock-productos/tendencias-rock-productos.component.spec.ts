import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TendenciasRockProductosComponent } from './tendencias-rock-productos.component';

describe('TendenciasRockProductosComponent', () => {
  let component: TendenciasRockProductosComponent;
  let fixture: ComponentFixture<TendenciasRockProductosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TendenciasRockProductosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TendenciasRockProductosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
