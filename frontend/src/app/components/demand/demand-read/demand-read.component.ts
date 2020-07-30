import { Demand } from './../demandmodel';
import { DemandService } from './../demand.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demand-read',
  templateUrl: './demand-read.component.html',
  styleUrls: ['./demand-read.component.css']
})
export class DemandReadComponent implements OnInit {
  demands: Demand[];
  displayedColumns = ['id', 'cliente', 'dtPedido', 'total', 'produtos', 'acao'];

  constructor(private demandService: DemandService) { }

  ngOnInit(): void {
    this.demandService.read().subscribe(demands => {
      this.demands = demands
    });
  }
}
