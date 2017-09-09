/*import { Component } from '@angular/core';

import '../assets/css/styles.css';
import { BandModel } from './models/band.model';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = "Press any PLAY button ...";
  giveMeMyName(): string {
    return " Igor Birkan";
  }

  names: [string];
  bands: [BandModel];


  constructor() {
    this.names = ["Igor", "Liran", "Yaniv"];
    this.bands = [new BandModel("Nirvana", "https://vignette3.wikia.nocookie.net/oneokrock/images/8/86/Nirvana_band.jpg/revision/latest?cb=20160509024826", "nirvana", "http://www.youtube.com/embed/hTWKbfoikeg?rel=0&autoplay=1", 5),
    new BandModel("Deep Purple", "http://i.dailymail.co.uk/i/pix/2013/04/25/article-2314944-0224A21B0000044D-954_634x474.jpg", "deeppurple", "http://www.youtube.com/embed/zUwEIt9ez7M?rel=0&autoplay=1", 5),
    new BandModel("Led Zeppelin", "http://www.ledzeppelin.com//sites/g/files/g2000006376/f/201706/led_zeppelin_photo1.jpg", "ledzeppelin", "http://www.youtube.com/embed/6Fqozggi-44?rel=0&autoplay=1", 4),
    new BandModel("Metallica", "https://veralline.com/uploads/images/00/05/71/2015/10/13/683e12.jpg", "metallica", "http://www.youtube.com/embed/Ckom3gf57Yw?rel=0&autoplay=1", 4),
    new BandModel("Game Of Trones", "http://img.cinemablend.com/cb/4/f/5/2/6/b/4f526b3e0c61263b4ea38c3970ecd3153053e2fad722149c42e8ba4e8c74ecb2.jpg", "gameoftrones", "http://www.youtube.com/embed/s7L2PVdrb_8?rel=0&autoplay=1", 1)];
  }

  onPlay(band: BandModel, bandIndex?: number) {
    this.title = "Now playing ".concat(band.name);
    //console.log("Play -> ", this.bands[bandIndex], band);

    var videoIframe = <HTMLIFrameElement>document.getElementById("video");
    videoIframe.src = band.src;
  }

  imgOnClck(obj: HTMLImageElement) {

    if (obj.height == 80) {
      obj.style.height = "96px";
      obj.style.width = "144px";
    } else {
      obj.style.height = "80px";
      obj.style.width = "120px";
    }
  }
}*/
import { Component } from '@angular/core';

@Component({
  selector: 'music-box',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent  {
  constructor() { }
}
