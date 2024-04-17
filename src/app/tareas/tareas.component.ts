import { Component, OnInit, output } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AgregarTareaComponent } from '../agregar-tarea/agregar-tarea.component';
import { tareaEstructura } from 'src/interfaces/tareaEstructura';
import {Input} from '@angular/core';
import { TareaComponent } from '../tarea/tarea.component';

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.scss'],
})
export class TareasComponent  implements OnInit {

  constructor(private modalController:ModalController) { }

  ngOnInit() {
    console.log(this.tareas);
  }

  tareaNueva:tareaEstructura;

  tareas:tareaEstructura[]=[
    {
      titulo:"Agrega tu primera tarea!",
      fechaAnio:0,
      fechaMes:0,
      descripcion:"Sin miedo!",
    }
  ];



  async abrirAgregarTarea() {
    const modal = await this.modalController.create({
      component: AgregarTareaComponent,
    });
    modal.onDidDismiss().then((dataReturned) => {
      if (dataReturned != null) {
        this.tareaNueva=dataReturned.data;
        if(!(this.tareaNueva.titulo==null||this.tareaNueva.fechaAnio==0||this.tareaNueva.fechaMes==0||this.tareaNueva.descripcion==null)){
          if(this.tareas[0].fechaAnio==0){
            this.tareas.pop();
          }
          this.tareas.push(this.tareaNueva);
        }
      }
    });
    return await modal.present();
  }


  isDetallesOpen = false;

  async abrirDetalles(tareaI: tareaEstructura){
    const modal = await this.modalController.create({
      component: TareaComponent,
      componentProps: {
        tarea: tareaI
      }
    });
    return await modal.present();
  }

  async cerrarDetalles() {
    this.modalController.dismiss();
  }
  //@Input() tareasI:tareaEstructura[];
  //@Input() Prueba:string;

  
}
