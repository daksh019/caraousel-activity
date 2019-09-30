import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'caraousel',
  templateUrl: './caraousel.component.html',
  styleUrls: ['./caraousel.component.css']
})
export class CaraouselComponent {

  @Input('slidingImage') img: any;
  @Output() toogleImageEvents = new EventEmitter();

  constructor() { 

  }

  ngOnInit() {
    console.log(this.img);
  }

  toggleImage() {
    console.log("here is the click on the toggle image");
    this.toogleImageEvents.emit();
  }

}
