import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {Subscription} from 'rxjs';
import {IProduct} from '../iproduct';
import {ProductService} from '../product.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  sub: Subscription;
  id: number;
  product: IProduct = {
    id: 0,
    name: 'sp0',
    description: 'Demo sp0'
  }

  constructor(private router: Router, private activeRouter: ActivatedRoute, private producService: ProductService) {
    this.sub = this.activeRouter.paramMap.subscribe((paramMap:ParamMap)=>{
      this.id = +paramMap.get('id');
      this.getProduct(this.id);
    })
  }

  ngOnInit(): void {
  }

  getProduct(id: number){
    this.product = this.producService.getProductById(id);
  }
  updateProduct(){
    this.producService.updateProduct(this.id, this.product);
    this.router.navigate(['/']);
  }
}
