import { Injectable } from '@angular/core';
import { Run } from './run';

@Injectable({
  providedIn: 'root'
})
export class RunServiceService {

  carreras: Run []=[];

  constructor() { }

  servaddrun(nuevacarrera: Run){
    this.carreras.push(nuevacarrera);
  }

  servgetruns(){
    return this.carreras;
  }

  servgetonerun(id: any){
    return this.carreras[id];
  }

  servedeleterun(id: number){
    this.carreras.splice(id,1);
  }
}
