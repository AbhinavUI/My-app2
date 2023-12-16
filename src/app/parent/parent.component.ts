import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent {

  // parent to child
  public ap:string = "";
  // child to parent
  public bp:string = "";

  catch(value:any){
    this.bp = value;
  }
}
