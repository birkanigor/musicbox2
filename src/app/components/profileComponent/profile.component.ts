import {Component} from "@angular/core";
import {ActivatedRoute, Router} from "@angular/router";
import {UsesrService} from "../../services/user.service";
import UserModel from "../../models/user.model";

@Component({
  selector: 'profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent
{
  user: UserModel;
  constructor(private activateRoute: ActivatedRoute, private router: Router, private userService: UsesrService)
  {
    this.user = new UserModel();
  }

  ngOnInit()
  {
    this.activateRoute.params.subscribe(params => {
      console.log("Hello Profile", params);
    })

    console.log(this.router);
  }

 /**
   * save user's name as class property
   * @param event
   */
  saveName(event: any)
  {
    event.preventDefault();
    // console.log("Save: ", this.name);
    // this.userService.name = this.name;
  }

  /**
   *
   * @param event
   */
  saveUser(event: any)
  {
    // console.log(this.user);

    this.userService.saveUser(this.user);

    // this.api.saveUserDetails(this.userService.name);
  }  
}
