import { Component, OnInit } from '@angular/core';
import {  ActivationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'trafic-light';
  showInitialMessage: boolean;
  constructor(
    public router: Router
  ) { }

  ngOnInit(): void{
    this.router.events.subscribe(event => {
      if (event instanceof ActivationEnd) {
        this.showInitialMessage = event.snapshot.data.showInitialMessage;
        console.log(this.showInitialMessage);
      }
    });
  }

}
