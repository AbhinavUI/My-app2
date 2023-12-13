import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UserService } from '../user.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss']
})
export class CreateUserComponent {

  public userForm:FormGroup = new FormGroup({
    name: new FormControl(),
    phone: new FormControl(),
    city: new FormControl(),
    fee: new FormControl(),
    image: new FormControl()
  });

  public id:any = "";

  constructor(private _activatedRoute: ActivatedRoute ,private _userService:UserService){
    _activatedRoute.params.subscribe(
      (data:any)=>{
        this.id = data.id;
        if(this.id){
          _userService.getUser(data.id).subscribe(
            (data:any)=>{
              this.userForm.patchValue(data);
            },
            (err:any)=>{
              alert('Internal server error');
            }
          )
        }
        
      }
    )
  }

  submit(){
    console.log(this.userForm.value);

    if(this.id){
      // to edit
      this._userService.editUser(this.id,this.userForm.value).subscribe(
        (data:any)=>{
          alert("User updated successfully");
        },
        (err:any)=>{
          alert("Internal server error");
        }
      )
    }
    else{
      // to create
      this._userService.createUser(this.userForm.value).subscribe(
        (data:any)=>{
          alert("User created successfully");
        },
        (err:any)=>{
          alert("Internal server error");
        }
      )
    }
  }
}
