import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Mascotas } from '../interfaces/mascotas';
import { MascotasService } from '../services/mascotas.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-mascotas-general',
  templateUrl: './mascotas-general.component.html',
  styleUrls: ['./mascotas-general.component.scss']
})
export class MascotasGeneralComponent implements OnInit {
  filterPost = "";
  total: number = 0;
  dataSource: MatTableDataSource<any>;
  displayedColumns: string[] = ['nmid', 'dsnombre_dueno', 'dsnombre_mascota', 'dsespecie', 'dsraza', 'dtfecha_nacimiento'];
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private config: NgbModalConfig, private modalService: NgbModal, private serviceMascotas: MascotasService, private route: ActivatedRoute, private fb: FormBuilder, private router: Router, private http: HttpClient) {
    this.dataSource = new MatTableDataSource(new Array<Mascotas>());
    config.backdrop = 'static';
    config.keyboard = false;
  }
  ngOnInit(): void {
    this.getAllConjunto();
  }

  getAllConjunto() {
    this.serviceMascotas.getMascotas().subscribe((rta: any) => {
      this.dataSource = new MatTableDataSource(rta.data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      this.total =  rta.data.length;
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}


