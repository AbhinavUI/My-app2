import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UserService } from '../user.service';
import { AccountService } from '../account.service';
import { ActivatedRoute, Router } from '@angular/router';

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

  public id:any = "";

  constructor(private _activatedRouted: ActivatedRoute, private _accountService: AccountService){
    _activatedRouted.params.subscribe(
      (data:any)=>{
        this.id = data.id;
        if(this.id){
          _accountService.getAccount(data.id).subscribe(
            (data:any)=>{
              this.accountForm.patchValue(data);
            },
            (err:any)=>{
              alert("Internal server error");
            }
          )
        }
      }
    )
  }

  submit(){
    console.log(this.accountForm.value);

    if(this.id){
      // to edit
      this._accountService.editAccount(this.id,this.accountForm.value).subscribe(
        (data:any)=>{
          alert("Account updated successfully");
        },
        (err:any)=>{
          alert('Internal server error');
        }
      )
    }
    else{
      // to create
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
}
