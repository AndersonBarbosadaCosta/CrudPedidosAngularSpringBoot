import { Component, OnInit } from '@angular/core';
import { DemandService } from '../demand.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Demand } from '../demandmodel';

@Component({
  selector: 'app-demand-delete',
  templateUrl: './demand-delete.component.html',
  styleUrls: ['./demand-delete.component.css']
})
export class DemandDeleteComponent implements OnInit {

  demand: Demand

  constructor(private demandService: DemandService, private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get("id");
    this.demandService.readById(id).subscribe(demand => {
      this.demand = demand;
    })
  }

  demandDelete(): void {
    this.demandService.delete(this.demand.id).subscribe(() => {
      this.demandService.showMessage("Pedido excluído com sucesso!");
      this.router.navigate(["/demands"]);
    })
  }

  cancel(): void {
    this.router.navigate(["/demands"]);
  }

}
