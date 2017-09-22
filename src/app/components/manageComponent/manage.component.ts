import {Component} from "@angular/core";
import BandModel from "../../models/band.model";
import {BandService} from "../../services/band.service";

@Component({
    selector: 'manage',
    templateUrl: './manage.component.html',
    styleUrls: ['./manage.component.css'],
    providers:[BandService]
})
export class ManageComponent {

    bands: BandModel[] = [];

    constructor(private bandServie: BandService) { 

        this.bandServie.getBands().subscribe(data=>this.bands = data);
    }

    ngOnInit()
    {
        console.log("Manage page");
    }
}
