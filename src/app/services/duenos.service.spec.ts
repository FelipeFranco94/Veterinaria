import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { DuenosService } from './duenos.service';
import { environment } from 'src/environments/environment';
import { of } from 'rxjs';
import { Duenos } from '../interfaces/duenos';
import { HttpHeaders } from '@angular/common/http';


describe('DuenosService', () => {
  let service: DuenosService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
      ],
    });
    service = TestBed.inject(DuenosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should call getDuenos', () => {
    const methodSpy = spyOn(service.servicio, 'get').and.returnValue(of({}));
    service.getDuenos();
    expect(methodSpy).toHaveBeenCalledWith(`${environment.url_api}/duenos/`);
  });


  // it('should call createDuenos', () => {
  //   const methodSpy = spyOn(service.servicio, 'post').and.returnValue(of({}));
  //   const duenos: Duenos = {
  //     tipoComponente: {
  //       nmid: 1,
  //       dsnombre_dueno: '',
  //       dstipo_documento: '',
  //       nmidentificacion: 1,
  //       dsciudad: '',
  //       dsdireccion: '',
  //       nmtelefono: 1,
  //       dtfecha_registro: ''
  //     },
  //     listaComponentes: []
  //   };
  //   const httpOptions = {
  //     headers: new HttpHeaders({
  //       'Content-Type': 'application/json'
  //     })
  //   };
  //   service.createDuenos(duenos);
  //   expect(methodSpy).toHaveBeenCalledWith(`${environment.url_api}/duenos`, duenos, jasmine.anything());
  // });


  // it('should call editar', () => {
  //   const methodSpy = spyOn(service.servicio, 'put').and.returnValue(of({}));
  //   const duenos: Duenos = {
  //     tipoComponente: {
  //       nmid: 1,
  //       dsnombre_dueno: '',
  //       dstipo_documento: '',
  //       nmidentificacion: 1,
  //       dsciudad: '',
  //       dsdireccion: '',
  //       nmtelefono: 1,
  //       dtfecha_registro: ''
  //     },
  //     listaComponentes: []
  //   };
  //   const httpOptions = {
  //     headers: new HttpHeaders({
  //       'Content-Type': 'application/json'
  //     })
  //   };
  //   service.editar(duenos);
  //   expect(methodSpy).toHaveBeenCalledWith(`${environment.url_api}/duenos`, duenos.nmid, jasmine.anything());
  // });


  // it('should call updateDuenos', () => {
  //   const methodSpy = spyOn(service.servicio, 'put').and.returnValue(of({}));
  //   const duenos: Duenos = {
  //     tipoComponente: {
  //       nmid: 1,
  //       dsnombre_dueno: '',
  //       dstipo_documento: '',
  //       nmidentificacion: 1,
  //       dsciudad: '',
  //       dsdireccion: '',
  //       nmtelefono: 1,
  //       dtfecha_registro: ''
  //     },
  //     listaComponentes: []
  //   };
  //   const httpOptions = {
  //     headers: new HttpHeaders({
  //       'Content-Type': 'application/json'
  //     })
  //   };
  //   service.updateDuenos(duenos);
  //   expect(methodSpy).toHaveBeenCalledWith(`${environment.url_api}/duenos`, duenos, jasmine.anything());
  // });


});
