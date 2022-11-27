import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TendenciasRockAboutComponent } from './tendencias-rock-about.component';

describe('TendenciasRockAboutComponent', () => {
  let component: TendenciasRockAboutComponent;
  let fixture: ComponentFixture<TendenciasRockAboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TendenciasRockAboutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TendenciasRockAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
