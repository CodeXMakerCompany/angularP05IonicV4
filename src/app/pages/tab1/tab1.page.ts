import { Component } from '@angular/core';
//Inyeccion del Servicio
import { DeseosService } from '../../services/deseos.service';
//navegacion desde el boton a la ruta
import { Router } from '@angular/router';
//Alertas
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor( public deseosService: DeseosService,
                  private router: Router,
                      private alertCtrl: AlertController ) {

  }

//async transforma a una promesa
  async agregarLista() {

    //this.router.navigateByUrl('tabs/tab1/agregar');
    const alert = await this.alertCtrl.create({
      header: 'Nueva lista',
      inputs: [
        {
          name: 'titulo',
          type: 'text',
          placeholder: 'Nombre de la lista'
        }
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            console.log('Cancelar');
          }
        },
        {
          text: 'Crear',
          handler: ( data ) => {
            console.log(data);

            if ( data.titulo.length === 0 ) {
                return;
            }

            this.deseosService.crearLista( data.titulo );
            //Crear lista

          }
        }
      ]
    });

    alert.present();



  }

}
