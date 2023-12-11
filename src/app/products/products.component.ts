import { Component } from '@angular/core';
import { provideProtractorTestingSupport } from '@angular/platform-browser';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {

  public freedelivery:string = ''
  public name: string = '';
  public price: number = 0;
  public rating: number = 0;
  public search: string = '';
  public totalItems: number = 0;
  public value: boolean = false;
  public priceValue: boolean = false;
  public totalPrice :number = 0

  
  public products : any=[
    //  {
    //   name: 'pen', price: 10, rating: 3, freeDelivery: 'yes',
    //  },
    //  {
    //   name: 'laptop', price: 50000, rating: 5, freeDelivery: 'yes',
    //  },
    //  {
    //   name: 'shirt', price: 800, rating: 3.5, freeDelivery: 'no',
    //  }
  ]

  addcart(){
    this.products.push(
      {
        name: this.name, price: this.price, rating: this.rating, freeDelivery: this.freedelivery
      }
    )
    this.name = '';
    this.price = 0;
    this.rating = 0;
    
  }

  delete(i:any){
     this.products.splice(i,1)
  }

  searchProduct(){
    var searchableProducts =  this.products.filter((product:any)=>product.name.includes(this.search))
    this.products = searchableProducts
  }
  
  onlyfreedelivery(){
    var filterProducts = this.products.filter((product:any)=>product.freeDelivery === 'yes')
    this.products = filterProducts
  }

  plowhigh(){
     this.products.sort((a:any, b:any) => a.price-b.price)
  }

  phighlow(){
    this.products.sort((a:any, b:any) => b.price-a.price)
  }

  rlowhigh(){
    this.products.sort((a:any, b:any) => a.rating-b.rating)
    
  }

  rhighlow(){
    this.products.sort((a:any, b:any) => b.rating-a.rating)

  }

  discount(){
    this.products.map((product:any) => {
      product.price = product.price / 2
      return product
    })
  }

  delcharge(){
    this.products.map((product:any) => {
      product.price = product.price + 20;
      return product
    })
  }

  totalprice(){
    this.totalPrice = this.products.reduce((sum:any,product:any)=> sum+product.price,0),
    this.priceValue = true
  }

  cartitems(){
    this.value = true
    this.totalItems = this.products.length
  }
}



