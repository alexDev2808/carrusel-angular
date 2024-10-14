import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { CommonModule } from '@angular/common';
import { SafePipe } from '../../../../pipes/safe.pipe';
import { SliderService } from '../../../../services/slider.service';
import { Slider, SliderItem } from '../../../../interfaces/Slider';
import { LoaderComponent } from '../../../../shared/loader/loader.component';

@Component({
  selector: 'app-carrusel',
  standalone: true,
  imports: [
    SlickCarouselModule,
    SafePipe,
    CommonModule,
    LoaderComponent
  ],
  templateUrl: './carrusel.component.html',
  styleUrl: './carrusel.component.css'
})
export class CarruselComponent implements OnInit {

  @ViewChild('video') videoHTML!: ElementRef;
  @ViewChild('btnPausar') btnPausar!: ElementRef;
  @ViewChild('btnPlay') btnPlay!: ElementRef;
  @ViewChild('btnNext') btnNext!: ElementRef;

  public widthScreen: any
  public heigthScreen: any
  public isPaused: boolean = true
  public isLoading: boolean = true

  constructor( private slidesService: SliderService) {
    this.setFileExtension()
    setTimeout(() => {
      this.isLoading = false
    }, 5000)
  }

  ngOnInit() {
    this.heigthScreen = window.innerHeight * 1.1
    this.widthScreen = window.innerWidth
  }

  get data(): Slider {
    return this.slidesService.getData()
  }

  onPauseButton() {
    this.isPaused = !this.isPaused
  }

  slideConfig = {
    "vertical": false,
    "slidesToShow": 1,
    "slidesToScroll": 1,
    "autoplay": false,
    "autoplaySpeed":5000,
    "dots": true,
    "pauseOnHover": false,
    "lazyLoad": 'ondemand',
    "adaptativeHeight": false
  };

  slickInit(e: any) {

  }

  breakpoint(e: any) {

  }

  beforeChange(e:any) {
    if(this.data.slides[e.nextSlide].ext === 'mp4'){
   
      const element = this.videoHTML.nativeElement;
      const duration = 1000 * Math.floor(element.duration)
      const btnPausar = this.btnPausar.nativeElement;
      const btnPlay = this.btnPlay.nativeElement;
      const btnNext = this.btnNext.nativeElement;
      
      element.play()
      
      btnPausar.click()
      setTimeout(() => {
        btnNext.click()
        btnPlay.click()
      }, duration)

    }
  }

  getFileExtension(filename:string){
    return filename.slice((filename.lastIndexOf(".") - 1 >>> 0) + 2);
  }

  setFileExtension(){
    this.data.slides.forEach( (file:SliderItem) => {
      if(file.ext !== "frame") {
        file.ext = this.getFileExtension(file.item)
      }
    })

  }
}