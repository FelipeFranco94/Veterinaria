import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuRoutingModule } from './menu-routing.module';
import { MenuComponent } from './components/menu/menu.component';
import { MaterialModule } from '../material/material.module';
import { BlockUIModule } from 'ng-block-ui';


@NgModule({
  declarations: [
    MenuComponent
  ],
  imports: [
    CommonModule,
    MenuRoutingModule,
    MaterialModule,
    BlockUIModule.forRoot(),
  ],
  exports: [
    MenuComponent
  ]
})
export class MenuModule { }
