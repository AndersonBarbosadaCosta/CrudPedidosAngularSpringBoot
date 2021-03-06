import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';
import { Product } from '../productmodel';

@Component({
  selector: 'app-product-read',
  templateUrl: './product-read.component.html',
  styleUrls: ['./product-read.component.css']
})
export class ProductReadComponent implements OnInit {

  products:Product[];
  displayedColumns = ['id', 'sku','nome','descricao','preco','quantidade','acao'];

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.read().subscribe(products => {
      this.products = products;
    })
  }

}
