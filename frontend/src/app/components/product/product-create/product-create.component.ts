import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { Product } from '../productmodel';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  product: Product = {
    sku:"",
    nome: "",
    descricao:"",
    preco: null,
    quantidade:null
  }

  constructor(private productService: ProductService,
    private router: Router) { }

  ngOnInit(): void {
  }

  productCreate(): void {
    this.productService.create(this.product).subscribe(() => {
      this.productService.showMessage("Produto criado!")
      this.router.navigate(["/products"])
    })
  }

  cancel(): void {
    this.router.navigate(["/products"])
  }

}
