import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent {

  public users:any = [];

  // Filter Method
  public term:string = "";

  // Sorting
  public column:string = "";
  public order:string = "";

  // Pagination
  public pageno:number = 0;

  // ID
  // public iD:any = 0;

  constructor(private _usersService:UserService, private _router:Router){

    _usersService.getUsers().subscribe(
      (data:any)=>{
        this.users = data;
      },
      (err:any)=>{
        alert('Internal server error');
      }
    )
  }

  getFilteredUsers(){
    this._usersService.getFilteredUsers(this.term).subscribe(
      (data:any)=>{
        this.users = data;
      },
      (err:any)=>{
        alert("Internal Server Error");
      }
    )
  }

  sort(){
    this._usersService.getSortedUsers(this.column,this.order).subscribe(
      (data:any)=>{
        this.users = data;
      },
      (err:any)=>{
        alert("Internal Server Error");
      }
    )
  }

  pagination(){
    this._usersService.getPagedUsers(this.pageno).subscribe(
      (data:any)=>{
        this.users = data;
      },
      (err:any)=>{
        alert("Internal Server Error");
      }
    )
  }

  // id(){
  //   this._usersService.getByID(this.iD).subscribe(
  //     (data:any)=>{
  //       this.users = data;
  //     },
  //     (err:any)=>{
  //       alert("Internal Server Error");
  //     }
  //   )
  // }

  delete(id:string){
    this._usersService.deleteUsers(id).subscribe(
      (data:any)=>{
        alert("deleted successfully");
        location.reload();
      },
      (err:any)=>{
        alert("Internal Server Error");
      }
    )
  }

  view(id:number){
    this._router.navigateByUrl("/dashboard/user-view/"+id);
  }

  edit(id:number){
    this._router.navigateByUrl("dashboard/edit-user/"+id);
  }
}
