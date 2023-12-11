import { Component } from '@angular/core';
import { FlipkartService } from '../flipkart.service';

@Component({
  selector: 'app-flipkart',
  templateUrl: './flipkart.component.html',
  styleUrls: ['./flipkart.component.scss']
})
export class FlipkartComponent {

  public flipkarts:any = [];

  constructor(private _flipkartsService:FlipkartService){
    _flipkartsService.getFlipkart().subscribe(
      (data:any)=>{
        this.flipkarts = data;
      },
      (err:any)=>{
        alert('Internal server error');
      }
    )
  }
  
  }
  

