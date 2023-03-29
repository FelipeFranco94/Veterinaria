import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTableModule } from '@angular/material/table';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatListModule } from '@angular/material/list';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableExporterModule } from 'mat-table-exporter';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatMenuModule } from '@angular/material/menu';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from '../app-routing.module';
import { DialogModule } from '@angular/cdk/dialog';


@NgModule({
  declarations: [],
  imports: [
    MatMenuModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    FormsModule,
    MatTableExporterModule,
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatTableModule,
    MatTooltipModule,
    MatSidenavModule,
    MatDatepickerModule,
    MatInputModule,
    MatSelectModule,
    MatListModule,
    HttpClientModule,
    MatPaginatorModule,
    AppRoutingModule,
    DialogModule,
  ],
  exports: [
    MatMenuModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    FormsModule,
    MatTableExporterModule,
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatTableModule,
    MatTooltipModule,
    MatSidenavModule,
    MatDatepickerModule,
    MatInputModule,
    MatSelectModule,
    MatListModule,
    HttpClientModule,
    MatPaginatorModule,
    AppRoutingModule,
    DialogModule,
  ]
})
export class MaterialModule { }
