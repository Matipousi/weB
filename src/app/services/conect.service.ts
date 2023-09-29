import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConectService {


  private url = 'http://localhost:8000/api';

  constructor() { }

sendTask(data:any){

const url = `${this.url}/tareas/create`;
const create = {
titulo: "titulo",
contenido: "contenido",
estado: "estado",
fecha: "fecha",

}
}

}