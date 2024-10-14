import { Injectable } from '@angular/core';
import { Slider } from '../interfaces/Slider';


@Injectable({
  providedIn: 'root'
})
export class SliderService {

  private data: Slider = {
    "slides": [
      {
        "id": "1",
        "name": "Imagen 1",
        "item": "1-80.jpg",
        "ext": "",
        "duration": 0,
        "frame": false
      },
      {
        "id": "2",
        "name": "Imagen 2",
        "item": "2-80.jpg",
        "ext": "",
        "duration": 0,
        "frame": false

      },
      {
        "id": "3",
        "name": "Video 1",
        "item": "video1.mp4",
        "ext": "",
        "duration": 0,
        "frame": false
      },
      {
        "id": "4",
        "name": "Imagen 3",
        "item": "5_s.jpeg",
        "ext": "",
        "duration": 0,
        "frame": false

      },
      {
        "id": "",
        "name": "Imagen 4",
        "item": "6-80.jpg",
        "ext": "",
        "duration": 0,
        "frame": false

      },
      {
        "id": "5",
        "name": "OEE Inyeccion",
        "item": "https://lookerstudio.google.com/embed/reporting/739c7683-7959-444f-a8b0-3e6cdf5c56c3/page/p_f6hxkun0fd",
        "ext": "",
        "duration": 0,
        "frame": true
      },
      {
        "id": "6",
        "name": "OEE Inyeccion - Disponibilidad",
        "item": "https://lookerstudio.google.com/embed/reporting/739c7683-7959-444f-a8b0-3e6cdf5c56c3/page/p_8uhwj24qgd",
        "ext": "",
        "duration": 0,
        "frame": true
      },
      {
        "id": "7",
        "name": "OEE Inyeccion - Eficiencia",
        "item": "https://lookerstudio.google.com/embed/reporting/739c7683-7959-444f-a8b0-3e6cdf5c56c3/page/p_t5s21rgcfd",
        "ext": "",
        "duration": 0,
        "frame": true
      },
      {
        "id": "8",
        "name": "OEE Inyeccion - Calidad",
        "item": "https://lookerstudio.google.com/embed/reporting/739c7683-7959-444f-a8b0-3e6cdf5c56c3/page/p_w4gf91btfd",
        "ext": "",
        "duration": 0,
        "frame": true
      },
      {
        "id": "9",
        "name": "OEE Ensamble",
        "item": "https://lookerstudio.google.com/embed/reporting/739c7683-7959-444f-a8b0-3e6cdf5c56c3/page/p_jjymilf4id",
        "ext": "",
        "duration": 0,
        "frame": true
      },
      {
        "id": "10",
        "name": "OEE Ensamble - Disponibilidad",
        "item": "https://lookerstudio.google.com/embed/reporting/739c7683-7959-444f-a8b0-3e6cdf5c56c3/page/p_9lm7da7xjd",
        "ext": "",
        "duration": 0,
        "frame": true
      },
      {
        "id": "11",
        "name": "OEE Ensamble - Eficiencia",
        "item": "https://lookerstudio.google.com/embed/reporting/739c7683-7959-444f-a8b0-3e6cdf5c56c3/page/p_aoxls9u6jd",
        "ext": "",
        "duration": 0,
        "frame": true
      }
    ],
    "sheets": [

    ]
  }

  constructor( ) {}

  getData(): Slider {
    return this.data
  }

}