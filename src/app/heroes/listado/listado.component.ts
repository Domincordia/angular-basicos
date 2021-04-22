import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent  {

  constructor()
  {
    const heroeBorrado:string="";
  }
  heroes:string[]=['Spiderman', 'Ironman','Hulk','Thor','Capitán América']

  heroeBorrado:string='';
  heroeBool:boolean=false;
  borrarHeroe(){

  this.heroeBorrado = this.heroes.shift()|| '';
    this.heroeBool=true
  }

}
