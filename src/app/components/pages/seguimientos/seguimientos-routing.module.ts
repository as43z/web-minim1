import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SeguimientosComponent } from './seguimientos.component';

const routes: Routes = [{ path: '', component: SeguimientosComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SeguimientosRoutingModule { }
