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

  it('should change trafic light color', () => {
    const fixture = TestBed.createComponent(TraficLightComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    const lightOn = compiled.querySelector('.on');
    component.changeColor();
    expect(component).toBeTruthy(lightOn.classList.contains('.off'));
  });

  it('should change trafic light color to red', () => {
    component.distance = -5000;
    fixture.detectChanges();
    component.changeColor();
    expect(component).toBeTruthy(component.distance === screen.width);
  });

});
