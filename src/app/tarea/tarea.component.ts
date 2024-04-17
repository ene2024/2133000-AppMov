import { Component, OnInit } from '@angular/core';
import { tareaEstructura } from 'src/interfaces/tareaEstructura';
import { ModalController } from '@ionic/angular';
import { Input } from '@angular/core';

@Component({
  selector: 'app-tarea',
  templateUrl: './tarea.component.html',
  styleUrls: ['./tarea.component.scss'],
})
export class TareaComponent  implements OnInit {

  constructor(private modalController:ModalController) { }

  ngOnInit() {}

  async cerrarDetalles() {
    this.modalController.dismiss();
  }

  @Input() tarea: tareaEstructura;
}
