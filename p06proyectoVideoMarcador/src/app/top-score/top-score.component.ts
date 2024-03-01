import { NgFor } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-score',
  standalone: true,
  imports: [NgFor],
  templateUrl: './top-score.component.html',
  styleUrl: './top-score.component.css'
})
export class TopScoreComponent implements OnInit{

  @Input() equipoLocal: any;
  @Input() equipoVisitante: any;

  // Aquí vamos a unir a todos los jugadores de ambos equipos.
  jugadores: any = [];

  constructor(){}

  ngOnInit(): void {
    // Estamos concatenando ambos arrays en este nuevo array que es jugadores.
    this.jugadores = [...this.equipoLocal.jugadores, ...this.equipoVisitante.jugadores]
  }


  // Cuando vamos a llamar al método sortJugadores(){}, por medio de ngAfterContentChecked(){}, lo que hace es que se dispara cada vez que allá cambios en los valores que alimentas estas propiedades decorada con @input().
  ngAfterContentChecked(){
    this.sortJugadores();
  }



  // Método para ordenar esos jugadores:
sortJugadores(){
  this.jugadores.sort((a: any, b:any) => {
    return (b.puntos - a.puntos);
  }) // Función de ordenamiento () =>

  }

}
