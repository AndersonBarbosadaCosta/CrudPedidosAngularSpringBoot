import { Router } from '@angular/router';
import { ClientService } from './../client.service';
import { Component, OnInit } from '@angular/core';
import { Client } from '../clientmodel';

@Component({
  selector: 'app-client-create',
  templateUrl: './client-create.component.html',
  styleUrls: ['./client-create.component.css']
})
export class ClientCreateComponent implements OnInit {

  client: Client = {
   nome: "",
   cpf: "",
   dtNascimento: ""
  }
  constructor(private clientService: ClientService,
    private router: Router) { }

  ngOnInit(): void {
  }

  clientCreate(): void {
    this.clientService.create(this.client).subscribe(() => {
      this.clientService.showMessage("Cliente criado!")
      this.router.navigate(["/clients"])
      }
    )
  }

  cancel(): void {
    this.router.navigate(["/clients"])
  }

}
