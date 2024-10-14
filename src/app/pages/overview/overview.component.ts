import { Component } from '@angular/core';
import { ZoneComponent } from './components/zone/zone.component';
import { ItemCarruselComponent } from "./components/item-carrusel/item-carrusel.component";
import { SliderService } from '../../services/slider.service';
import { SliderItem } from '../../interfaces/Slider';

@Component({
  selector: 'app-overview',
  standalone: true,
  imports: [
    ZoneComponent,
    ItemCarruselComponent
],
  templateUrl: './overview.component.html',
  styleUrl: './overview.component.css'
})
export class OverviewComponent {

  constructor( private slidesService: SliderService ) { }
   
  get files(): SliderItem[] {
    return this.slidesService.getData().slides
  }
  
}
