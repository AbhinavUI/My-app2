import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-account-view',
  templateUrl: './account-view.component.html',
  styleUrls: ['./account-view.component.scss']
})
export class AccountViewComponent {

  public account:any = {};

  constructor(private _activatedRoute: ActivatedRoute, private _accountService: AccountService){

    _activatedRoute.params.subscribe(
      (data:any)=>{
        console.log(data.id);
        _accountService.getAccount(data.id).subscribe(
          (data:any)=>{
            this.account = data;
          },
          (err:any)=>{
            alert("Internal server error");
          }
        )
      }
    )
  }

}
