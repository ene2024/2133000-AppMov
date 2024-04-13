import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AgregarTareaComponent } from './agregar-tarea/agregar-tarea.component';
import { TareasComponent } from './tareas/tareas.component';

const routes: Routes = [
  {
    path:'agregar-tarea', component:AgregarTareaComponent
  },
  {
    path:'tareas',component:TareasComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents =[AgregarTareaComponent,TareasComponent]
