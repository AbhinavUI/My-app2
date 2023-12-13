import { Component } from '@angular/core';
import { AccountService } from '../account.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.scss']
})
export class AccountsComponent {

  //This is to create a variable(accounts) to store some value of datatype "any"
  public accounts:any = [];

  // Filter Method
  public term:string = "";

  // Sorting
  public column:string = "";
  public order:string = "";

  // Pagination
  public pageno:number = 0;

  //"subscribe" to the "Observable" and store the data
  constructor(private _accountsService:AccountService, private _router: Router){

    _accountsService.getAccounts().subscribe(
      (data:any)=>{
        this.accounts = data;
      },
      (err:any)=>{
        alert('Internal server error');
      }
    )
  }

  getFilteredAccounts(){
    this._accountsService.getFilteredAccounts(this.term).subscribe(
      (data:any)=>{
        this.accounts = data;
      },
      (err:any)=>{
        alert("Internal Server Error");
      }
    )
  }

  sort(){
    this._accountsService.getSortedAccounts(this.column,this.order).subscribe(
      (data:any)=>{
        this.accounts = data;
      },
      (err:any)=>{
        alert("Internal Server Error");
      }
    )
  }

  pagination(){
    this._accountsService.getPagedAccounts(this.pageno).subscribe(
      (data:any)=>{
        this.accounts = data;
      },
      (err:any)=>{
        alert("Internal Server Error");
      }
    )
  }

  delete(id:string){
    this._accountsService.deleteAccounts(id).subscribe(
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
    this._router.navigateByUrl("/dashboard/account-view/"+id);
  }
  
  edit(id:number){
    this._router.navigateByUrl("dashboard/edit-account/"+id);
  }
}
