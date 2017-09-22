import { Component , Input} from '@angular/core';

import BandModel from '../../models/band.model';

@Component({
    selector: 'manage-card',
    templateUrl: './manageCard.component.html',
    styleUrls:['./manageCard.component.css']
})

export class ManageCardComponent  {

    @Input()
    bandInput: BandModel;
}