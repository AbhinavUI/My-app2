import { Component } from '@angular/core';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent {
  public user: string = '';
  public users:string[] = []

  submit(){
    this.users.push(this.user),
    this.user = ''
  }

  delete(){
    this.users.pop()
  }
}
