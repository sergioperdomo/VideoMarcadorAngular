import { NgClass, NgFor } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-equipo',
  standalone: true,
  imports: [NgFor, NgClass],
  templateUrl: './equipo.component.html',
  styleUrl: './equipo.component.css'
})
export class EquipoComponent implements OnInit {

  @Input() equipo: any;

  constructor(){}

  ngOnInit(): void {
      
  }
}
