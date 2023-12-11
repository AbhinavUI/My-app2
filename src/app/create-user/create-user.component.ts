import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UserService } from '../user.service';

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
    image: new FormControl()
  });

  constructor(private _userService:UserService){}

  submit(){
    console.log(this.userForm.value);

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
