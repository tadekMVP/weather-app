import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LayoutComponent} from "./components/layout/layout.component";
import {RouterModule} from "@angular/router";
import { NavbarComponent } from './components/navbar/navbar.component';

const PUBLIC_COMPONENTS = [
  LayoutComponent,
  NavbarComponent
];

@NgModule({
  declarations: [...PUBLIC_COMPONENTS],
  exports: [...PUBLIC_COMPONENTS],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class AppCommonModule {
}
