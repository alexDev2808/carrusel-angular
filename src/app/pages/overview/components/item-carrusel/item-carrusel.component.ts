import { Component, Input } from '@angular/core';
import { SliderItem } from '../../../../interfaces/Slider';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-item-carrusel',
  standalone: true,
  imports: [],
  templateUrl: './item-carrusel.component.html',
  styleUrl: './item-carrusel.component.css'
})
export class ItemCarruselComponent {

  @Input()
  public fileList: SliderItem[] = []

  editar() {
    Swal.fire({
      icon: "warning",
      title: "Deseas Editar?",
      text: "That thing is still around?",
    });
  }

  eliminar() {
    Swal.fire({
      icon: "error",
      title: "Deseas eliminar el archivo??",
      text: "Ten cuidado!",
    });
  }
}
