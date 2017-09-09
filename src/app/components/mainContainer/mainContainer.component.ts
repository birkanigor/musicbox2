import { Component } from '@angular/core';

import BandModel from "../../models/band.model";
import {DomSanitizer, SafeResourceUrl, SafeUrl} from "@angular/platform-browser";

@Component({
    selector: 'main-container',
    templateUrl: './mainContainer.component.html'
})

export class MainContainerComponent  {
    bands: [BandModel];
    selectedBand: BandModel;
    videoUrl: SafeUrl;

    constructor(private sanitizer: DomSanitizer) { 

        this.bands = [new BandModel("Nirvana", "https://vignette3.wikia.nocookie.net/oneokrock/images/8/86/Nirvana_band.jpg/revision/latest?cb=20160509024826", "nirvana", "https://www.youtube.com/embed/hTWKbfoikeg?rel=0&autoplay=1", 5),
        new BandModel("Deep Purple", "http://i.dailymail.co.uk/i/pix/2013/04/25/article-2314944-0224A21B0000044D-954_634x474.jpg", "deeppurple", "http://www.youtube.com/embed/zUwEIt9ez7M?rel=0&autoplay=1", 5),
        new BandModel("Led Zeppelin", "http://www.ledzeppelin.com//sites/g/files/g2000006376/f/201706/led_zeppelin_photo1.jpg", "ledzeppelin", "http://www.youtube.com/embed/6Fqozggi-44?rel=0&autoplay=1", 4),
        new BandModel("Metallica", "https://veralline.com/uploads/images/00/05/71/2015/10/13/683e12.jpg", "metallica", "http://www.youtube.com/embed/Ckom3gf57Yw?rel=0&autoplay=1", 4),
        new BandModel("Game Of Trones", "http://img.cinemablend.com/cb/4/f/5/2/6/b/4f526b3e0c61263b4ea38c3970ecd3153053e2fad722149c42e8ba4e8c74ecb2.jpg", "gameoftrones", "http://www.youtube.com/embed/s7L2PVdrb_8?rel=0&autoplay=1", 1)];        
    }

    onPlayVideoFromBandCard(bandModel: BandModel){
        this.selectedBand=bandModel;

        //this.selectedBand.src=this.sanitizer.bypassSecurityTrustUrl("https://vignette3.wikia.nocookie.net/oneokrock/images/8/86/Nirvana_band.jpg/revision/latest?cb=20160509024826");
        //this.videoUrl = this.sanitizer.bypassSecurityTrustUrl(this.selectedBand.src);

        console.log(bandModel);
    }


}