import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-trafic-light',
  templateUrl: './trafic-light.component.html',
  styleUrls: ['./trafic-light.component.scss']
})
export class TraficLightComponent implements OnInit {
  @ViewChild('truck')
  truck: ElementRef;
  acellerate: any;
  distance: number = screen.width;
  constructor() { }

  ngOnInit(): void {
  }

  changeColor(): void{
    const traficColors = [
      {
        previous: 'green',
        next: 'yellow'
      },
      {
        previous: 'yellow',
        next: 'red'
      },
      {
        previous: 'red',
        next: 'green'
      }
    ];
    const lightOn = document.querySelector('.on');
    this.lightsManager(lightOn, 'turnOff');
    traficColors.forEach((color) => {
      if (lightOn.classList.contains(color.previous)) {
        const lightToOn = document.querySelector(`.${color.next}`)
        this.lightsManager(lightToOn, 'turnOn');
        if (color?.next === 'green') {
          this.run();
        } else if (color?.next === 'red') {
          this.stop();
        }
      }
    });
  }

  lightsManager(light, action): void{
    if (action === "turnOn") {
      light.classList.add('on');
      light.classList.remove('off');
    } else if (action === 'turnOff') {
      light.classList.add('off');
      light.classList.remove('on');
    }
  }

  run() {
    this.distance;
    this.acellerate = setInterval(() => {
      this.distance -= 10
      this.truck.nativeElement.style.transform = `translateX(${this.distance}px)`;
      if (this.distance <= -460) {
        this.distance = screen.width;
      }
    }, 40);
  }

  stop() {
    setTimeout(() => {
      clearInterval(this.acellerate);
    }, 900);
  }

}
