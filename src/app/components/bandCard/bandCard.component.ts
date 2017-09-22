import { Component , Input,Output,EventEmitter} from '@angular/core';

import BandModel from '../../models/band.model';

@Component({
    selector: 'band-card',
    templateUrl: './bandCard.component.html',
    styleUrls:['./bandCard.component.css']
})

export class BandCardComponent  {

    @Input()
    bandInput: BandModel;

    @Output()
    playVideo: EventEmitter<BandModel> = new EventEmitter();

    constructor() { }

    onPlayVideo(event: any)
    {
        this.playVideo.emit(this.bandInput);
    }    
}