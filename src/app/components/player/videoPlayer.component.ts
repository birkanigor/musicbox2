import { Component ,Input } from '@angular/core';
import BandModel from '../../models/band.model';
import {DomSanitizer, SafeResourceUrl, SafeUrl} from "@angular/platform-browser";

@Component({
    selector: 'video-player',
    templateUrl: './videoPlayer.component.html',
    styleUrls:['./videoPlayer.component.css']
})

export class VideoPlayer    {
    @Input()
    selectedBandInput: BandModel;

     @Input()
    selectedVideoUrl : SafeUrl;

    constructor() { }

    playSelectedBand(bandModel: BandModel){    
        
        var videoIframe = <HTMLIFrameElement>document.getElementById("video");
        
       // console.log(videoIframe);
        if(videoIframe.src!=bandModel.src!){            
            videoIframe.src = bandModel.src;
        }
    } 
}