import { Component } from '@angular/core';
import { UserdetailService } from '../userdetail.service';

@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.scss']
})
export class UserdetailsComponent {

  public userdetails:any = [ ];

  constructor(private _userdetailService:UserdetailService){
    _userdetailService.getUserdetails().subscribe(
      (data:any)=>{
        this.userdetails = data.users;
      },
      (err:any)=>{
        alert("Internal server error");
      }
    )
  }

}
