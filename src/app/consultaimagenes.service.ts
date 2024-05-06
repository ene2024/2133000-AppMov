import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ConsultaimagenesService {

  constructor(public http:HttpClient) { }

  getImages(){
    return this.http.get('https://picsum.photos/v2/list?page=1&limit=100')
  }
}
