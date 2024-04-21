import { Injectable } from '@angular/core';
import { tareaEstructura } from 'src/interfaces/tareaEstructura';
@Injectable({
  providedIn: 'root'
})

export class TareasService {

  tareas: tareaEstructura[] = [{
    titulo: "asdas",
    fechaAnio: 0,
    fechaMes: 0,
    descripcion: ""
  }];
  emptyTareas: boolean;

  constructor() { }

  addTarea(tareaNuevaR: tareaEstructura): void {
    if (this.tareas[0].fechaAnio === 0) {
      this.tareas.pop();
    }
    this.tareas.push(tareaNuevaR);
  }

  getTareas() {
    this.isEmpty();
    return this.tareas;
  }


  deleteTarea(n: number) {
    if (n != 0) {
      this.tareas.splice(1, n);
    }

    else if (this.tareas.length == 1) {
      this.tareas [0]= {
        titulo: "",
        fechaAnio: 0,
        fechaMes: 0,
        descripcion: ""
      }
      this.isEmpty();
    }
    else {
      this.tareas.shift();
    }
  }

  isEmpty() {
    if (this.tareas[0].fechaAnio === 0) {
      this.emptyTareas = true;
      console.log("Vacio");
    }
    else {
      this.emptyTareas = false;
    }
  }

}
