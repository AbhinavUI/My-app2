import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent {

  // parent to child
 @Input() public ac:string = "";

//  child to parent
 public bc:string = "";
 @Output() public bEvent: EventEmitter<any> = new EventEmitter();

 send(){
  this.bEvent.emit(this.bc);
 }
}
