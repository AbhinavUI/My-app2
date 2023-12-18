import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-rating-child',
  templateUrl: './rating-child.component.html',
  styleUrls: ['./rating-child.component.scss']
})
export class RatingChildComponent {

 @Input() public rate1:any = [];

 text:string = "";
 charcount:number = 0;
 maxlength:number = 0;

 updatedcharcount(){
  if(this.text.length==this.maxlength){
    alert("Maxlength reached");
  }
  else{
    this.charcount = this.text.length;
  }
  
 }

}
