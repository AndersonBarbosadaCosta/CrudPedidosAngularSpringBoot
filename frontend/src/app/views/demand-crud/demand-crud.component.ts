import { Component, OnInit } from '@angular/core';
import { HeaderService } from 'src/app/components/template/header/header.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-demand-crud',
  templateUrl: './demand-crud.component.html',
  styleUrls: ['./demand-crud.component.css']
})
export class DemandCrudComponent implements OnInit {

  constructor(private headerService: HeaderService, private router:Router) { 
    headerService.headerData = {
      title:"Cadastro de Pedidos",
      icon: "add_shopping_cart",
      routeUrl: "/demands"
    }
  }

  ngOnInit(): void {
  }

  navigateToDemandCreate(): void {
    this.router.navigate(["/demands/create"])
  }

}
