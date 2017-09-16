import { Component } from '@angular/core';
import BandModel from "../../models/band.model";
import {BandService} from "../../services/band.service";
import { SafeUrl} from "@angular/platform-browser";

@Component({
    selector: 'main-container',
    templateUrl: './mainContainer.component.html',
    providers:[BandService]
})

export class MainContainerComponent  {

    bands: BandModel[] = [];
    selectedBand: BandModel;
    videoUrl: SafeUrl;
    videoRating : number;

    constructor(private bandServie: BandService) { 

        this.bandServie.getBands().subscribe(data=>this.bands = data);
    }

    onPlayVideoFromBandCard(bandModel: BandModel){
        this.selectedBand=bandModel;
        this.videoRating = this.selectedBand.rating;
   
        console.log("bandModel = ",bandModel);
    }
}