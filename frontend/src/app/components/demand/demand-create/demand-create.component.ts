import { ProductService } from './../../product/product.service';
import { Product } from './../../product/productmodel';
import { ClientService } from './../../client/client.service';
import { DemandService } from './../demand.service';
import { Demand } from './../demandmodel';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Client } from '../../client/clientmodel';

@Component({
  selector: 'app-demand-create',
  templateUrl: './demand-create.component.html',
  styleUrls: ['./demand-create.component.css']
})
export class DemandCreateComponent implements OnInit {

  clientes: Client[]
  produtosCombo: Product[]

  demand: Demand = {
    cliente: null,
    dtCompra: "",
    total: null,
    produtos: []
  }

  constructor(private demandService: DemandService,
    private clientServie: ClientService,
    private productService: ProductService,
    private router: Router) { }

  ngOnInit(): void {
    this.clientServie.read().subscribe(clientes => {
      this.clientes = clientes
    })
    this.productService.read().subscribe(produtos => {
      this.produtosCombo = produtos
    })
  }

  demandCreate(): void {
    this.demandService.create(this.demand).subscribe(() => {
      this.demandService.showMessage("Pedido criado!")
      this.router.navigate(["/demands"])
    })
  }

  cancel(): void {
    this.router.navigate(["/demands"])
  }

  calculaTotal(preco:number): void {
   const totalGeral = preco
   this.demand.total = preco
  }
}
