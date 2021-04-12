import {Injectable} from '@angular/core';
import {IProduct} from './iproduct';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products: IProduct[] = [
    {
      id: 1,
      name: 'Iphone 12',
      description: 'Mo ta SP1'
    },
    {
      id: 2,
      name: 'Samsung Galaxy Note 20',
      description: 'Mo ta SP2'
    },
    {
      id: 3,
      name: 'Google Pixel 5',
      description: 'Mo ta SP3'
    }
  ];
  getAllProduct(): IProduct[] {
    return this.products;
  }

  // tslint:disable-next-line:typedef
  getProductById(id: number){
    return this.products[id - 1];
  }

  // tslint:disable-next-line:typedef
  updateProduct(id: number, p: IProduct){
    this.products[id - 1] = p;
  }

  addProduct(p: IProduct){
    let id=0;
    for (let i = 0; i < this.products.length; i++) {
      id=this.products[i].id + 1;
    }
    p.id = id;
    this.products.push(p);
  }

constructor() {
}
}
