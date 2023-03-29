import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { LayoutComponent } from './layout/layout.component';
import { ValidateComponent } from './validate/validate.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { DialogModule } from '@angular/cdk/dialog';
import { PacienteComponent } from './paciente/paciente.component';
import { MatTableModule } from '@angular/material/table';
import { MascotasComponent } from './mascotas/mascotas.component';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { BlockUIModule } from 'ng-block-ui';
import { MascotasGeneralComponent } from './mascotas-general/mascotas-general.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableExporterModule } from "mat-table-exporter";
import { MaterialModule } from './material/material.module';
import { MenuModule } from "./menu/menu.module";


@NgModule({
    declarations: [
        AppComponent,
        LayoutComponent,
        ValidateComponent,
        HomeComponent,
        PacienteComponent,
        MascotasComponent,
        MascotasGeneralComponent,
        RegisterComponent,
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        MatTableExporterModule,
        FormsModule,
        MatFormFieldModule,
        BrowserAnimationsModule,
        MatButtonModule,
        MaterialModule,
        ReactiveFormsModule,
        MatInputModule,
        MatIconModule,
        MatTooltipModule,
        MatToolbarModule,
        MatMenuModule,
        MatSidenavModule,
        MatListModule,
        HttpClientModule,
        AppRoutingModule,
        DialogModule,
        MatTableModule,
        MatSelectModule,
        MatDatepickerModule,
        MatPaginatorModule,
        BlockUIModule.forRoot(),
        MenuModule
    ]
})
export class AppModule { }
