import { Component, Input, OnInit, output } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { tareaEstructura } from 'src/interfaces/tareaEstructura';
import { TareasService } from '../tareas.service';

@Component({
  selector: 'app-agregar-tarea',
  templateUrl: './agregar-tarea.component.html',
  styleUrls: ['./agregar-tarea.component.scss'],
})

export class AgregarTareaComponent  implements OnInit {
  isButtonDisabled: boolean = true;

  constructor(private modalController:ModalController, private tareasServicio: TareasService) { }
  tareas:tareaEstructura[]=this.tareasServicio.tareas;
  tareaNueva: tareaEstructura={
    titulo:'',
    fechaAnio:0,
    fechaMes:0,
    descripcion:""
  };

  ngOnInit() {
    
  }

  async cerrarmodal() {
      this.modalController.dismiss();
  }

  agregarTarea():void{
    this.tareasServicio.addTarea(this.tareaNueva);
    this.tareasServicio.isEmpty();
    this.cerrarmodal();
  }

}
