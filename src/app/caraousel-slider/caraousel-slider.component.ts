import { Component, OnInit, ContentChildren, QueryList } from '@angular/core';


interface ISliderImage{
  src: string;
  alt: string;
  hide: boolean;
}  

class SliderImage implements ISliderImage{
  src: string;
  alt: string;
  hide: boolean;

  constructor(src: string, alt: string, hide: boolean){
    this.src = src;
    this.alt = alt;
    this.hide = hide;
  }
}

@Component({
  selector: 'app-caraousel-slider',
  templateUrl: './caraousel-slider.component.html',
  styleUrls: ['./caraousel-slider.component.css']
})
export class CaraouselSliderComponent {

  slidingImages: SliderImage[];
  activeImage: number;

  constructor() { 
    this.slidingImages = [
      new SliderImage("https://picsum.photos/id/1002/4312/2868", "First Slide", false),
      new SliderImage("https://picsum.photos/id/101/2621/1747", "Second Slide", true),
      new SliderImage("https://picsum.photos/id/1015/6000/4000", "Third Slide", true)
    ];

    this.activeImage = 0;

  }

  setActiveImage(){
    this.slidingImages.forEach((img, index) => {
      if(index === this.activeImage){
        img.hide = false;
      } else {
        img.hide = true;
      }
    });
  }

  setNextActive(){
    if(this.activeImage == this.slidingImages.length - 1){
      this.activeImage = 0;
    } else {
      this.activeImage++;
    }
  }

  setPreviousActive(){
    if(this.activeImage === 0){
      this.activeImage =  this.slidingImages.length - 1;
    } else {
      this.activeImage--;
    }
  }

  toggleImages(){
    console.log("got the message in the slider component");
    this.setNextActive();
    this.setActiveImage();
  }

  togglePrevious(){
    this.setPreviousActive();
    this.setActiveImage();
  }

  toggleNext(){
    this.setNextActive();
    this.setActiveImage();
  }

}



