import { Component } from '@angular/core';
//Inyeccion del Servicio
import { DeseosService } from '../../services/deseos.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {


  constructor( public deseosService: DeseosService ) {

    }
    
}
