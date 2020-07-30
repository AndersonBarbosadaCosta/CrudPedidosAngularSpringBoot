import { Router } from '@angular/router';
import { HeaderService } from './../../components/template/header/header.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-client-crud',
  templateUrl: './client-crud.component.html',
  styleUrls: ['./client-crud.component.css']
})
export class ClientCrudComponent implements OnInit {

  constructor(private headerService: HeaderService, private router:Router) {
    headerService.headerData = {
      title:"Cadastro de Clientes",
      icon: "account_box",
      routeUrl: "/clients"
    }
   }

  ngOnInit(): void {
  }

  navigateToClientCreate():void {
    this.router.navigate(["/clients/create"])
  }

}
