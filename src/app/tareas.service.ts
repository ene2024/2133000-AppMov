import { Injectable } from '@angular/core';
import { tareaEstructura } from 'src/interfaces/tareaEstructura';
@Injectable({
  providedIn: 'root'
})

export class TareasService {

  tareas:tareaEstructura[]=[{
    titulo:"",
    fechaAnio:0,
    fechaMes:0,
    descripcion:""
  }];
  emptyTareas:boolean;

  constructor() { }

  addTarea(tareaNuevaR:tareaEstructura):void{
    if(this.tareas[0].fechaAnio===0){
      this.tareas.pop();
    }
    this.tareas.push(tareaNuevaR);
  }

  getTareas(){
    this.isEmpty();
    return this.tareas;
  }


  DeleteTarea(tareasR:tareaEstructura){
    return this.tareas;
  }

  isEmpty(){
    if(this.tareas[0].fechaAnio===0){
      this.emptyTareas=true;
      console.log("Vacio");
    }
    else{
      this.emptyTareas=false;
    }
  }

}
