import { Component } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'music-box',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent  {
  constructor(private activatedRoute: ActivatedRoute)
  {

  }

  ngOnInit()
  {
    console.log(this.activatedRoute);

    this.activatedRoute.url.subscribe(url => {

      console.log("URL: ", url);

    });
  }
}
