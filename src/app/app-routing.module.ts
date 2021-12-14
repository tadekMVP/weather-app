import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LayoutComponent} from "./common/components/layout/layout.component";

const routes: Routes = [
  {
    path: '', redirectTo: '/weather', pathMatch: 'full'
  },
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'weather',
        loadChildren: () => import('./weather/weather.module').then(m => m.WeatherModule),
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
