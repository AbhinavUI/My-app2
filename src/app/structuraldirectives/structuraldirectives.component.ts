import { Component } from '@angular/core';

@Component({
  selector: 'app-structuraldirectives',
  templateUrl: './structuraldirectives.component.html',
  styleUrls: ['./structuraldirectives.component.scss']
})
export class StructuraldirectivesComponent {
  // public names: string[] = ['abhi','bhargav','sai raja','gummi','nithin','suraj']

  // public states: string[] = ['Telangana','andhra','tamilnadu']

  // public products: any = [
  //   {name: 'pen', price: 20},
  //   {name: 'phone', price: 20000},
  //   {name: 'laptop', price: 50000}
  // ]

  public products: any = [
    {name: '', price: 0}
  ]

  public name1: string='';
  public price1: number=0;
  
  submit(){
    this.products.name = this.name1,
    this.products.price = this.price1
  }

  // This is "if" condition purpose
  // public num: number=0
}
