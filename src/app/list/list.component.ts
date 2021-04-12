import { Component, OnInit } from '@angular/core';
import {ProductService} from '../product.service';
import {IProduct} from '../iproduct';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  products: IProduct[]=[];

  constructor(private productService: ProductService) {
    this.getAll();
  }

  ngOnInit(): void {
  }
   getAll(){
    this.products = this.productService.getAllProduct();
   }
}
