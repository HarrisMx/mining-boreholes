import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BoreholesComponent } from './boreholes/boreholes.component';
import { DetailsComponent } from './details/details.component';

const routes: Routes = [
  {
    path: '',
    component: BoreholesComponent
  },
  {
    path: 'boreholes',
    component: BoreholesComponent
  },
  {
    path: 'details/:id',
    component: DetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
