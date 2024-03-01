import { NgClass, NgFor } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-equipo',
  standalone: true,
  imports: [NgFor, NgClass],
  templateUrl: './equipo.component.html',
  styleUrl: './equipo.component.css'
})
export class EquipoComponent implements OnInit {

  @Input() equipo: any;
  @Output() canasta: EventEmitter<any> = new EventEmitter;

  constructor(){}

  ngOnInit(): void {
      
  }

  // Método que se disparara con cada botón
  setCanasta(puntos: number, nombreJugador:string): void {
    this.canasta.emit({
      puntos,
      nombreJugador
    }); // Dentro de emit() lo que vamos es a pasarle información para que la suba al componente padre
  }

} 
