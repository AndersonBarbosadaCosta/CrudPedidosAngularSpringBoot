import { Demand } from './demandmodel';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpClient } from '@angular/common/http';
import { Observable, EMPTY } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DemandService {

  baseUrl = "http://localhost:8080/api/pedidos";

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  showMessage(msg: string, isError: boolean = false): void {
    this.snackBar.open(msg, "x", {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: isError ? ["msg-error"] : ["msg-success"]
    })
  }

  create(demand: Demand): Observable<Demand> {
    return this.http.post<Demand>(this.baseUrl, demand).pipe(
      map(obj => obj),
      catchError(e => this.errorHandler(e))
    );
    }
  
    read(): Observable<Demand[]> {
      return this.http.get<Demand[]>(this.baseUrl).pipe(
        map(obj => obj),
        catchError(e => this.errorHandler(e))
      );
    }
  
    readById(id: number): Observable<Demand> {
      const url = `${this.baseUrl}/${id}`;
      return this.http.get<Demand>(url).pipe(
        map(obj => obj),
        catchError(e => this.errorHandler(e))
      );
    }
  
    update(demand: Demand): Observable<Demand> {
      const url = `${this.baseUrl}/${demand.id}`;
      return this.http.put<Demand>(url, demand).pipe(
        map(obj => obj),
        catchError(e => this.errorHandler(e))
      );
    }
  
    delete(id: number): Observable<Demand> {
      const url = `${this.baseUrl}/${id}`;
      return this.http.delete<Demand>(url).pipe(
        map(obj => obj),
        catchError(e => this.errorHandler(e))
      );
    }
  
    errorHandler(e: any): Observable<any> {
      this.showMessage("Ocorreu um erro !", true);
      return EMPTY;
    }

}
