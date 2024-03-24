import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {
    console.log("AppComponent: Constructor")
  }
ngOnChanges(){
  console.log("AppComponent: OnChanges")
}
ngOnInit(){
  console.log("AppComponent: OnInit")
}
ngDoCheck(){
  console.log("AppComponent: DoCheck")
}
ngAfterContentInit(){
  console.log("AppComponent: AfterContentInit")
}
ngAfterContentChecked(){
  console.log("AppComponent: AfterContentChecked")
}
ngAfterViewInit(){
  console.log("AppComponent: AfterViewInit")
}
ngAfterViewChecked(){
  console.log("AppComponent: AfterViewChecked")
}
ngOnDestroy(){
  console.log("AppComponent: OnDestroy")
}
  //Variables que son Usadas para ngIF
  variableA: boolean=true;
  variableB: boolean=false;

  //Variables que son Usadas para ngFor
  variableC: any = ["Articulo 1", "Articulo 2", "Articulo 3","Articulo 4","Articulo 5"];
  variableD: any = ["$10", "$20", "$30","$40","50"];

  //Variable que son Usadas por [ngClass]
  variableE: boolean[] = [true,true,false,false,true];

  //Variable usada para el Databinding interpolacion de cadenas
  variableF: string = "MiAppMovil-2133000";

  //Funcion usada para el Databinding de Enlace de Eventos
  clickme():void{
    alert(`VariableF: ${this.variableF} \nHiciste Click!\nEjemplo de Enlace de Eventos`);
  }

  //Variable usada para enlace de propiedades
  imgURL: string = "https://media.tenor.com/a_HnHwV4dS0AAAAM/hey.gif";
  imgClass: string = "eimagen";

  //Variable usada para enlace de 2 direcciones
  VariableG: string = '';
}
