import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CrearComponent } from './crear/crear.component';
import { ListarComponent } from './listar/listar.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'listar', component: ListarComponent },
  { path: 'crear', component: CrearComponent },
  { path: 'editar/:id', component: CrearComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
