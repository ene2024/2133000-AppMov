import { Component, Input, OnInit, output } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { tareaEstructura } from 'src/interfaces/tareaEstructura';
import { Output } from '@angular/core';

@Component({
  selector: 'app-agregar-tarea',
  templateUrl: './agregar-tarea.component.html',
  styleUrls: ['./agregar-tarea.component.scss'],
})

export class AgregarTareaComponent  implements OnInit {

  constructor(private modalController:ModalController) { }
  
  ngOnInit() {
    
  }

  async cerrarmodal() {
      this.modalController.dismiss();
  }


  agregarTarea(){
    this.modalController.dismiss(this.tareaNueva);
  }


  tareaNueva: tareaEstructura = {
    titulo:'',
    fechaMes:0,
    fechaAnio:0,
    descripcion:''
  };
}
