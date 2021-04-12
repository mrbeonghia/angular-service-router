import { Component, OnInit } from '@angular/core';
import {IProduct} from '../iproduct';
import {Router} from '@angular/router';
import {ProductService} from '../product.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
  product: IProduct = {
    id: 0,
    name: '',
    description: ''
  };

  constructor(private router: Router, private productService: ProductService) { }

  ngOnInit(): void {
  }
  createProduct(){
    this.productService.addProduct(this.product);
    this.router.navigate(['/']);
  }

}
