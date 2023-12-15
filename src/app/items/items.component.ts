import { Component } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent {

  public count:number = 0;  

  constructor(private _commonService: CommonService){
    _commonService.getValue().subscribe(
      (data:any)=>{
        this.count = data;
      }
    )
  }

  
  add(){
    this._commonService.setValue();
  }
}
