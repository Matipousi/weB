import { Component } from '@angular/core';

import { FormsModule } from '@angular/forms';

import { ConectService } from '../services/conect.service';
@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.scss']
})
export class CrearComponent {

constructor(private api:ConectService){}

public tarea: any[] =[];

create(data:any){

  this.api.sendTask().subscribe(
    
    resultadoTareas => {
      for(const e of (resultadoTareas as any)){
              this.tarea.push({
                titulo: e.titulo,
                contenido: e.contenido,
                estado: e.estado,
                fecha: e.fecha,
              })
      }
    }
      )


}

}

