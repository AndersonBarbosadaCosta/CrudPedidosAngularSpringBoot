import { Router, ActivatedRoute } from '@angular/router';
import { ClientService } from './../client.service';
import { Component, OnInit } from '@angular/core';
import { Client } from '../clientmodel';

@Component({
  selector: 'app-client-update',
  templateUrl: './client-update.component.html',
  styleUrls: ['./client-update.component.css']
})
export class ClientUpdateComponent implements OnInit {

  client: Client

  constructor(private clientService: ClientService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get("id");
    this.clientService.readById(id).subscribe(client => {
      this.client = client;
    })
  }

  clientUpdate(): void {
    this.clientService.update(this.client).subscribe(() => {
      this.clientService.showMessage("Cliente atualizado com sucesso!");
      this.router.navigate(["/clients"]);
    })
  }

  cancel(): void {
    this.router.navigate(["/clients"]);
  }

}
