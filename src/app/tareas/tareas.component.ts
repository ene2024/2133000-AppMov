import { Component, OnInit, ɵrestoreComponentResolutionQueue } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AgregarTareaComponent } from '../agregar-tarea/agregar-tarea.component';
import { tareaEstructura } from 'src/interfaces/tareaEstructura';
import { TareasService } from '../tareas.service';


@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.scss'],
})
export class TareasComponent  implements OnInit {

  constructor(private modalController:ModalController, public tareasServicio: TareasService) { }

  emptyTareas:boolean=true;

  ngOnInit() {
    console.log(this.tareas);
    this.tareasServicio.getTareas();
  }

  tareas:tareaEstructura[]=this.tareasServicio.tareas;

  async abrirAgregarTarea() {
    const modal = await this.modalController.create({
      component: AgregarTareaComponent,
    });
    return await modal.present();
  }
  
  eliminartarea(n:number){
    this.tareasServicio.deleteTarea(n);
  }

  imageurl:string="https://t2.ea.ltmcdn.com/es/posts/8/5/4/por_que_mi_perro_esta_triste_3458_orig.jpg";

}
