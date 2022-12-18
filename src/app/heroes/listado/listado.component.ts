import { Component } from '@angular/core';
import { contadorComponent } from '../../contador/contador/contador.component';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {

  heroes: string[] = ['Spiderman', 'Iroman','Hulk', 'Thor', 'Capitan America'];
  heroeBorrado: string = '';


  borrarHeroe() {
    this.heroeBorrado = this.heroes.shift() || '';

  }
}
