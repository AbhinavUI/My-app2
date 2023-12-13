import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-view',
  templateUrl: './user-view.component.html',
  styleUrls: ['./user-view.component.scss']
})
export class UserViewComponent {

  public user:any = {};
  
  constructor(private _activatedRoute: ActivatedRoute, private _userService: UserService){

    _activatedRoute.params.subscribe(
      (data:any)=>{
        console.log(data.id);
        _userService.getUser(data.id).subscribe(
          (data:any)=>{
            this.user = data;
          },
          (err:any)=>{
            alert('Internal server error');
          }
        )
      }
    )
  }

}
