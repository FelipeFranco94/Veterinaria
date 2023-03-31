import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Duenos } from '../interfaces/duenos';
import { DuenosService } from '../services/duenos.service';
import { Router } from '@angular/router';
import { MatTableDataSource } from "@angular/material/table";
import { MatPaginator } from "@angular/material/paginator";
import { MatSort } from "@angular/material/sort";
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-paciente',
  templateUrl: './paciente.component.html',
  styleUrls: ['./paciente.component.scss']
})
export class PacienteComponent implements OnInit {
  myForm!: FormGroup;
  filterPost = '';
  currentPage = 0;
  displayedColumns: string[] = ['nmid', 'dsnombre_dueno', 'dstipo_documento', 'nmidentificacion', 'dsciudad', 'dsdireccion', 'nmtelefono', 'dtfecha_registro', 'accion'];
  dataSource: MatTableDataSource<Duenos>;
  duenosExcel: Array<Duenos> = [];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  constructor(private router: Router, private fb: FormBuilder, private _httpClient: HttpClient, private modalService: NgbModal, private config: NgbModalConfig, private servicioDuenos: DuenosService) {
    this.dataSource = new MatTableDataSource(new Array<Duenos>());
    config.backdrop = 'static';
    config.keyboard = false;
  }

  ngOnInit(): void {
    this.myForm = this.fb.group({
      nmid: [''],
      dsnombre_dueno: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(30)]],
      dstipo_documento: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(50)]],
      nmidentificacion: ['', [Validators.required]],
      dsciudad: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(50)]],
      dsdireccion: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(50)]],
      nmtelefono: ['', [Validators.required]]
    });
    this.getAllConjunto();
  }

  getAllConjunto() {
    this.servicioDuenos.getDuenos().subscribe((rta: any) => {
      this.dataSource = new MatTableDataSource(rta.data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      this.currentPage =  rta.data.length;
    });
  }

  editar(datos: { nmid: number; dsnombre_dueno: string; dstipo_documento: string; nmidentificacion: number; dsciudad: string; dsdireccion: string; nmtelefono: number; }) {
    this.myForm.setValue({
      nmid: datos.nmid,
      dsnombre_dueno: datos.dsnombre_dueno,
      dstipo_documento: datos.dstipo_documento,
      nmidentificacion: datos.nmidentificacion,
      dsciudad: datos.dsciudad,
      dsdireccion: datos.dsdireccion,
      nmtelefono: datos.nmtelefono,
    })
  }

  open(content: any) {
    this.modalService.open(content);
    this.myForm.reset();
  }

  openEdit(content: any) {
    this.modalService.open(content);
  }

  validGuardar(form: FormGroup) {
    if (this.myForm.valid) {
      if (form.value.nmid && form.value.nmid !== 0) {
        this.actualizar(form);
        return;
      } this.servicioDuenos.createDuenos(form.value)
        .subscribe(data => {
          alert("Se guardó el Dueños con éxito! " + JSON.stringify(this.myForm.value.dsnombre_dueno, null, 4));
          this.myForm.reset();
          this.getAllConjunto();
        })
    }
  }

  actualizar(form: FormGroup) {
    this.servicioDuenos.updateDuenos(form.value)
      .subscribe(data => {
        alert("Se actualizó con exito!!! " + JSON.stringify(this.myForm.value.dsnombre_dueno, null, 4))
        this.getAllConjunto();
      });
  }

  mostrar(datos: { nmid: number; dsnombre_dueno: string; }) {
    this.router.navigate(["mascotas"], { queryParams: { nmid: datos.nmid, dsnombre_dueno: datos.dsnombre_dueno } });
  }

 /* validguardar(form: FormGroup) {
    if (this.myForm.invalid) {
      for (const key in this.myForm.controls) {
        this.myForm.controls[key].markAsDirty
      }
      let telefono: any = document.getElementById("nmtelefono");
      let telefonoValido: boolean = telefono.reportValidity();
      let direccion: any = document.getElementById("dsdireccion");
      let direccionValido: boolean = direccion.reportValidity();
      let ciudad: any = document.getElementById("dsciudad");
      let ciudadValido: boolean = ciudad.reportValidity();
      let identificacion: any = document.getElementById("nmidentificacion");
      let identificacionValido: boolean = identificacion.reportValidity();
      let documento: any = document.getElementById("dstipo_documento");
      let documentoValido: boolean = documento.reportValidity();
      let dueno: any = document.getElementById("dsnombre_dueno");
      let duenoValido: boolean = dueno.reportValidity();
    }
  }*/
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  ReadExcel(event: any) {
    let file = event.target.files[0];
    let fileReader = new FileReader();
    fileReader.readAsBinaryString(file);

    fileReader.onload = (e) => {
      var workBook = XLSX.read(fileReader.result, { type: 'binary' });
      var sheetNames = workBook.SheetNames;
      this.duenosExcel = XLSX.utils.sheet_to_json(workBook.Sheets[sheetNames[0]])
      console.log("Dueños", this.duenosExcel)
    }
  }
}

