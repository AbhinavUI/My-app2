import { Component } from '@angular/core';
import { EmailService } from '../email.service';

@Component({
  selector: 'app-emails',
  templateUrl: './emails.component.html',
  styleUrls: ['./emails.component.scss']
})
export class EmailsComponent {

  public emails:any = [];

  constructor(private _emailsService:EmailService){
    _emailsService.getEmail().subscribe(
      (data:any)=>{
        this.emails = data;
      },
      (err:any)=>{
        alert('Internal server error');
      }
    )
  }
}
