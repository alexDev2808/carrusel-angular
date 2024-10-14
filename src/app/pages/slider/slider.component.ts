import { Component } from '@angular/core';
import { CarruselComponent } from "./components/carrusel/carrusel.component";

@Component({
  selector: 'app-slider',
  standalone: true,
  imports: [CarruselComponent],
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.css'
})
export class SliderComponent {

}
