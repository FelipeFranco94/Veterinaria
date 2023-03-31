import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Duenos } from '../interfaces/duenos';

@Injectable({
  providedIn: 'root'
})
export class DuenosService {

  servidor = 'http://localhost:8080/api';
  constructor(public servicio: HttpClient) { }

  getDuenos(): Observable<any> {
    return this.servicio.get(`${this.servidor}/duenos`);
  }

  createDuenos(duenos: Duenos) {
    return this.servicio.post<Duenos>(`${this.servidor}/duenos`, duenos);
  }

  editar(array: any[]) {
    return this.servicio.post<Duenos>(`${this.servidor}/duenos/`, array);
  }

    updateDuenos(duenos: Duenos) {
    return this.servicio.put<Duenos>(`${this.servidor}/duenos`, duenos);
  }
}
