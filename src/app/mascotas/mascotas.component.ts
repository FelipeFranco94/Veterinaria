import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Mascotas } from '../interfaces/mascotas';
import { MascotasService } from '../services/mascotas.service';


@Component({
  selector: 'app-mascotas',
  templateUrl: './mascotas.component.html',
  styleUrls: ['./mascotas.component.scss']
})
export class MascotasComponent implements OnInit {
  [x: string]: any;
  datosMascotas: Array<Mascotas> = [];
  myForm!: FormGroup;
  @Input() dsnombre_dueno: string = "";
  total= 0;

  constructor(private config: NgbModalConfig, private modalService: NgbModal, private serviceMascotas: MascotasService, private route: ActivatedRoute, private fb: FormBuilder, private router: Router, private http: HttpClient) {
    config.backdrop = 'static';
    config.keyboard = false;
  }
  ngOnInit(): void {
    this.myForm = this.fb.group({
      nmid: [''],
      dsnombre_mascota: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(50)]],
      nmid_especie: ['', [Validators.required]],
      dsraza: ['', [Validators.required]],
      dtfecha_nacimiento: ['', [Validators.required]],
      nmid_dueno: [''],
    });
    this.refresh();
  }

  refresh() {
    this.route.queryParams.subscribe(params => {
      this.nmid_dueno = params.nmid,
        this.dsnombre_dueno = params.dsnombre_dueno,
        this.myForm.get('nmid_dueno')?.setValue(params.nmid)
    });
    let arrayMascotas: Array<Mascotas> = [];
    this.serviceMascotas.getMascotaDueno(this.nmid_dueno).subscribe((datos: { data: any; }) => {
      this.datosMascotas = datos.data;
      this.total = this.datosMascotas.length;
    });
  }

  open(content: any) {
    this.modalService.open(content);
  }

  openEdit(content: any) {
    this.modalService.open(content);
  }

  editar(datos: { nmid: any; dsnombre_mascota: any; nmid_especie: any; dsraza: any; dtfecha_nacimiento: any; nmid_dueno: any; }) {
    this.myForm.setValue({
      nmid: datos.nmid,
      dsnombre_mascota: datos.dsnombre_mascota,
      nmid_especie: datos.nmid_especie,
      dsraza: datos.dsraza,
      dtfecha_nacimiento: datos.dtfecha_nacimiento,
      nmid_dueno: datos.nmid_dueno,
    })
  }

  guardar(form: FormGroup) {
    if (this.myForm.valid) {
      if (form.value.nmid && form.value.nmid !== 0) {
        this.actualizar(form);
        return;
      }
      this.serviceMascotas.createMascotas(form.value)
        .subscribe(data => {
          alert("Mascota guardada con exito!!");
          this.myForm.reset();
          this.refresh();
        });
    } else {
      alert('formualario inválido');
    }
  }

  actualizar(form: FormGroup) {
    this.serviceMascotas.updateMascotas(form.value)
      .subscribe(data => {
        alert("Se actualizó con exito!!!")
        this.refresh();
      });
  }
}
