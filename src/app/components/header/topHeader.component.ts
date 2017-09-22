import { Component,ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import {UsesrService} from "../../services/user.service";
import UserModel from "../../models/user.model";

@Component({
    selector: 'top-header',
    templateUrl: './topHeader.component.html',
    styleUrls: ['./topHeader.component.css']
})

export class TopHeaderComponent {
    title:string="Music Box : ";
    userName: string = "";

    constructor(private userService: UsesrService, private changeRef: ChangeDetectorRef){}

    getListName():string {
        return "Rock";
    }

    ngOnInit()
    {
        this.userService.detailsUpdate.subscribe(this.onUserDetailsChange.bind(this));
    }

    onUserDetailsChange(user: UserModel)
    {
        console.log("THIS: ", this);

        console.log("TopHeader: ", user);
        this.userName = user.name;

        this.changeRef.markForCheck();
    }    
}