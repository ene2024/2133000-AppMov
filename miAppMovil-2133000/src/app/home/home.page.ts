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
  
}
