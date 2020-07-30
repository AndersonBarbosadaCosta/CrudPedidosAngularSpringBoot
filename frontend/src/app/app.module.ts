import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/template/header/header.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FooterComponent } from './components/template/footer/footer.component';
import { NavComponent } from './components/template/nav/nav.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { HomeComponent } from './views/home/home.component';
import { ProductCrudComponent } from './views/product-crud/product-crud.component';
import { ProductCreateComponent } from './components/product/product-create/product-create.component'
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ProductReadComponent } from './components/product/product-read/product-read.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule, MatRippleModule} from '@angular/material/core';

import localePt from '@angular/common/locales/pt';
import {registerLocaleData} from '@angular/common';
import { ProductUpdateComponent } from './components/product/product-update/product-update.component';
import { ProductDeleteComponent } from './components/product/product-delete/product-delete.component';
import { ClientCreateComponent } from './components/client/client-create/client-create.component';
import { ClientDeleteComponent } from './components/client/client-delete/client-delete.component';
import { ClientReadComponent } from './components/client/client-read/client-read.component';
import { ClientUpdateComponent } from './components/client/client-update/client-update.component';
import { ClientCrudComponent } from './views/client-crud/client-crud.component';
import { DemandUpdateComponent } from './components/demand/demand-update/demand-update.component';
import { DemandCreateComponent } from './components/demand/demand-create/demand-create.component';
import { DemandDeleteComponent } from './components/demand/demand-delete/demand-delete.component';
import { DemandReadComponent } from './components/demand/demand-read/demand-read.component';
import { DemandCrudComponent } from './views/demand-crud/demand-crud.component';

registerLocaleData(localePt);

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    HomeComponent,
    ProductCrudComponent,
    ProductCreateComponent,
    ProductReadComponent,
    ProductUpdateComponent,
    ProductDeleteComponent,
    ClientCreateComponent,
    ClientDeleteComponent,
    ClientReadComponent,
    ClientUpdateComponent,
    ClientCrudComponent,
    DemandUpdateComponent,
    DemandCreateComponent,
    DemandDeleteComponent,
    DemandReadComponent,
    DemandCrudComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatButtonModule,
    MatSnackBarModule,
    HttpClientModule,
    FormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRippleModule
  ],
  providers: [{
    provide:LOCALE_ID,
    useValue:'pt-BR'
  }

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
