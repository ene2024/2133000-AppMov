import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {}
  //Variables que son Usadas para ngIF
  variableA: boolean=true;
  variableB: boolean=false;

  //Variables que son Usadas para ngFor
  variableC: any = ["Articulo 1", "Articulo 2", "Articulo 3","Articulo 4","Articulo 5"];
  variableD: any = ["$10", "$20", "$30","$40","50"];

  //Variable que son Usadas por [ngClass]
  variableE: boolean[] = [true,true,false,false,true];
}
