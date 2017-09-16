import { Component ,Input,SimpleChanges,ElementRef } from '@angular/core';
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
    selectedVideoRating : number;

    videoSource:SafeResourceUrl;

    constructor(private ref : ElementRef, private sanitizer: DomSanitizer) { }

    ngOnChanges(changes:SimpleChanges){

        console.log("changes.selectedBandInput.currentValue.src",changes.selectedBandInput.currentValue.src);

        this.videoSource=this.sanitizer.bypassSecurityTrustResourceUrl(changes.selectedBandInput.currentValue.src);  

        console.log("changes : ",changes);      
        
        for (let propName in changes) {  
            let change = changes[propName];
            console.log(propName.toString(),"change : ",change);
            /*let curVal  = JSON.stringify(change.currentValue);
            let prevVal = JSON.stringify(change.previousValue);

                console.log(curVal);
                console.log(prevVal);*/
        }
    }
}