import { Component, OnInit } from '@angular/core';

import { Product, ProductResolved } from './product';
import { ProductService } from './product.service';
import { Action } from 'rxjs/internal/scheduler/Action';
import { ActivatedRoute } from '@angular/router';

@Component({
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  pageTitle = 'Product Detail';
  product: Product | null = null;
  errorMessage = '';

  constructor(private route: ActivatedRoute) { }

  onProductRetrieved(product: Product | null): void {
    this.product = product;

    if (this.product) {
      this.pageTitle = `Product Detail: ${this.product.productName}`;
      } 
    else {
      this.pageTitle = 'No product found';
      }
  }

  ngOnInit(): void {
    const resolvedData: ProductResolved = this.route.snapshot.data['resolvedData'];
    this.errorMessage = String(resolvedData.error);
    this.onProductRetrieved(resolvedData.product);
  
  }
}
