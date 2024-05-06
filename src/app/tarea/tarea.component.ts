import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { TareasService } from '../tareas.service';
import { ConsultaimagenesService } from '../consultaimagenes.service';

@Component({
  selector: 'app-tarea',
  templateUrl: './tarea.component.html',
  styleUrls: ['./tarea.component.scss'],
})
export class TareaComponent  implements OnInit {

  constructor(private modalController:ModalController,private ruta : ActivatedRoute,public tareasServicio: TareasService,private image: ConsultaimagenesService) { }

  idTarea: number = this.ruta.snapshot.params['id'];

  ngOnInit() {
    this.getimages();
  }

  async cerrarDetalles() {
    this.modalController.dismiss();
  }

  tarea=this.tareasServicio.getTerea(this.idTarea);

  imageinfo:any[]=[];

  getimages(): any{
    this.image.getImages()
    .subscribe((resp: Object) => {      
    console.log(resp);
    this.imageinfo= resp as any[];
    });
  }

  random(){
    return (Math.trunc(Math.random()*100));
  }

}


