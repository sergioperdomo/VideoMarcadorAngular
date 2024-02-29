import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MarcadorComponent } from './marcador/marcador.component';
import { EquipoComponent } from './equipo/equipo.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MarcadorComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'p06proyectoVideoMarcador';
}
