import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Mascotas } from '../interfaces/mascotas';

@Injectable({
  providedIn: 'root'
})
export class MascotasService {

  servidor = 'http://localhost:8080/api';
  constructor(public servicio: HttpClient) { }

  getMascotas(): Observable<any> {
    return this.servicio.get(`${this.servidor}/mascotas`);
  }

  getMascotaDueno(nmid_dueno: number): Observable<any> {
    return this.servicio.get(`${this.servidor}/mascotas/${nmid_dueno}`);
  }

  createMascotas(mascotas: Mascotas) {
    return this.servicio.post<Mascotas>(`${this.servidor}/mascotas`, mascotas);
  }

  editar(mascotas: Mascotas) {
    return this.servicio.put<Mascotas>(`${this.servidor}/mascotas/`, mascotas.nmid);
  }

  updateMascotas(mascotas: Mascotas) {
    return this.servicio.put<Mascotas>(`${this.servidor}/mascotas`, mascotas);
  }
}
