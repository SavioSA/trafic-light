import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trafic-light',
  templateUrl: './trafic-light.component.html',
  styleUrls: ['./trafic-light.component.scss']
})
export class TraficLightComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  changeColor(): void{
    const traficColors = [
      {
        previous: 'red',
        next: 'yellow'
      },
      {
        previous: 'yellow',
        next: 'green'
      },
      {
        previous: 'green',
        next: 'red'
      }
    ];
    const lightOn = document.querySelector('.on');
    this.lightsManager(lightOn, 'turnOff');
    traficColors.forEach((color) => {
      if (lightOn.classList.contains(color.previous)) {
        const lightToOn = document.querySelector(`.${color.next}`)
        this.lightsManager(lightToOn, 'turnOn');
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

}
