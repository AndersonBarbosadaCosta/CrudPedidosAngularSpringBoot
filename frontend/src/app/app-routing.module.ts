import { ClientDeleteComponent } from './components/client/client-delete/client-delete.component';
import { ProductUpdateComponent } from './components/product/product-update/product-update.component';
import { ProductCreateComponent } from './components/product/product-create/product-create.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './views/home/home.component'
import { ProductCrudComponent } from './views/product-crud/product-crud.component'
import { ProductDeleteComponent } from './components/product/product-delete/product-delete.component';
import { ClientUpdateComponent } from './components/client/client-update/client-update.component';
import { ClientCreateComponent } from './components/client/client-create/client-create.component';
import { ClientCrudComponent } from './views/client-crud/client-crud.component';
import { DemandCrudComponent } from './views/demand-crud/demand-crud.component';
import { DemandCreateComponent } from './components/demand/demand-create/demand-create.component';
import { DemandUpdateComponent } from './components/demand/demand-update/demand-update.component';
import { DemandDeleteComponent } from './components/demand/demand-delete/demand-delete.component';


const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "products",
    component: ProductCrudComponent
  },
  {
    path: "products/create",
    component: ProductCreateComponent
  },
  {
    path: "products/update/:id",
    component: ProductUpdateComponent
  },
  {
    path: "products/delete/:id",
    component: ProductDeleteComponent
  },
  {
    path: "clients",
    component: ClientCrudComponent
  },
  {
    path: "clients/create",
    component: ClientCreateComponent
  },
  {
    path: "clients/update/:id",
    component: ClientUpdateComponent
  },
  {
    path: "clients/delete/:id",
    component: ClientDeleteComponent
  },
  {
    path: "demands",
    component: DemandCrudComponent
  },
  {
    path: "demands/create",
    component: DemandCreateComponent
  },
  {
    path: "demands/update/:id",
    component: DemandUpdateComponent
  },
  {
    path: "demands/delete/:id",
    component: DemandDeleteComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
