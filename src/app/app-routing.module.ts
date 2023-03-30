import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { MascotasComponent } from './mascotas/mascotas.component';
import { MascotasGeneralComponent } from './mascotas-general/mascotas-general.component';
import { PacienteComponent } from './paciente/paciente.component';
import { MenuComponent } from './menu/components/menu/menu.component';
import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children:
      [
        {
          path: '',
          pathMatch: 'full',
          redirectTo: 'home'
        },
        {
          path: 'home',
          component: HomeComponent
        },
        {
          path: 'menu',
          component: MenuComponent
        },
        {
          path: 'mascotas',
          component: MascotasComponent
        },
        {
          path: 'mascota-general',
          component: MascotasGeneralComponent
        },
        {
          path: 'paciente',
          component: PacienteComponent
        }
      ]
  },
  { path: "login",   loadChildren: () => import('./login/login.module').then(m => m.LoginModule)},
  { path: "register", component: RegisterComponent, pathMatch: "full" },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
]
@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
