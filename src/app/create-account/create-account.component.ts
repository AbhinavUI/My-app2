import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UserService } from '../user.service';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.scss']
})
export class CreateAccountComponent {

  public accountForm:FormGroup = new FormGroup({
    account_name: new FormControl(),
    available_balance: new FormControl(),
    account_number: new FormControl(),
    city: new FormControl(),
    profile_picture: new FormControl()
  });

  constructor(private _accountService:AccountService){}

  submit(){
    console.log(this.accountForm.value);

    this._accountService.createAccount(this.accountForm.value).subscribe(
      (data:any)=>{
        alert("User created successfully");
      },
      (err:any)=>{
        alert("Internal server error");
      }
    )
    

  }
}
