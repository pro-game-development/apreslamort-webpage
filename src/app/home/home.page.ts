import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  stars: number[] = [1, 2, 3, 4, 5];

  selectedValue: number = 0;
  isMouseover = true;

  public data: any;

  constructor() { }

  ngOnInit() {
    console.log(this.stars);
    console.log(this.selectedValue);
  }

  //counting stars

  countStar(star: number) {
    this.isMouseover = false;
    this.selectedValue = star;
    this.data = this.selectedValue;
    console.log(this.data);
  }

  //for adding star

  addClass(star: number) {
    if (this.isMouseover) {
      this.selectedValue = star;
      console.log(this.selectedValue);

    }
  }

  //for removing star

  removeClass() {
    if (this.isMouseover) {
      this.selectedValue = 0;
      console.log(this.selectedValue);
    }
  }

}
