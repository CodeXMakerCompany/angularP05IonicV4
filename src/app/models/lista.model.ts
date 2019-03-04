import { ListaItem } from './lista-item.model';

export class Lista {
  //OBJETO LISTA
  id: number;
  titulo: string;
  creadaEn: Date;
  terminadaEn: Date;
  terminada: boolean;
  //CONTENIDO DE LA LISTA
  items: ListaItem[];

  constructor( titulo: string ) {

      this.titulo = titulo;

      this.creadaEn = new Date();
      this.terminada = false;
      this.items = [];

      this.id = new Date().getTime();
  }

}
