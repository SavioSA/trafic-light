import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TraficLightComponent } from './trafic-light.component';

describe('TraficLightComponent', () => {
  let component: TraficLightComponent;
  let fixture: ComponentFixture<TraficLightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TraficLightComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TraficLightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
