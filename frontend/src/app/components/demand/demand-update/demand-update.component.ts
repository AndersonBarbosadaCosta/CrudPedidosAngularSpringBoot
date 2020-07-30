import { ClientService } from './../../client/client.service';
import { ProductService } from './../../product/product.service';
import { Product } from './../../product/productmodel';
import { Component, OnInit } from '@angular/core';
import { DemandService } from '../demand.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Demand } from '../demandmodel';
import { Client } from '../../client/clientmodel';

@Component({
  selector: 'app-demand-update',
  templateUrl: './demand-update.component.html',
  styleUrls: ['./demand-update.component.css']
})
export class DemandUpdateComponent implements OnInit {

  demand: Demand
  produtosCombo: Product[]
  clientes: Client[]
  constructor(private demandService: DemandService, private router: Router,
    private route: ActivatedRoute, private productService: ProductService,
    private clientService: ClientService) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get("id");
    this.demandService.readById(id).subscribe(demand => {
      this.demand = demand;
    });
    this.productService.read().subscribe(produtos => {
      this.produtosCombo = produtos
    })
    this.clientService.read().subscribe(clientes => {
      this.clientes = clientes
    })
  }

  demandUpdate(): void {
    this.demandService.update(this.demand).subscribe(() => {
      this.demandService.showMessage("Pedido atualizado com sucesso!");
      this.router.navigate(["/demands"]);
    })
  }

  cancel(): void {
    this.router.navigate(["/demands"]);
  }

}
