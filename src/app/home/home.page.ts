import { Component } from '@angular/core';
import { HttpServiceService } from '../http-service.service';
import { HttpClient } from '@angular/common/http';
import { saveAs } from 'file-saver';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  stars: number[] = [1, 2, 3, 4, 5];

  selectedValue: number = 0;
  selectedValue2: number = 0;
  selectedValue3: number = 0;
  selectedValue4: number = 0;
  selectedValue5: number = 0;
  isMouseover = true;

  public data: any;
  public data2: any;
  public data3: any;
  public data4: any;
  public data5: any;


  constructor(private httpService: HttpServiceService, private http: HttpClient) { }


  ngOnInit() {
    console.log(this.stars);
    console.log(this.selectedValue);
  }

  downloadFile() {
    const url = '/assets/Manual.pdf'; // replace with your file URL
    this.http.get(url, { responseType: 'blob' }).subscribe(res => {
      const file = new Blob([res], { type: 'application/pdf' }); // replace with your file type
      const fileName = 'Manual.pdf'; // replace with your file name
      saveAs(file, fileName);
    });
  }

  //counting stars

  countStar(star: number, type: string) {
    this.isMouseover = false;
    switch (type) {
      case "Gameplay":
        this.selectedValue = star;
        this.data = this.selectedValue;
        break;
      case "Music":
        this.selectedValue2 = star;
        this.data2 = this.selectedValue2;
        break;
      case "Design":
        this.selectedValue3 = star;
        this.data3 = this.selectedValue3;
        break;
      case "Story":
        this.selectedValue4 = star;
        this.data4 = this.selectedValue4;
        break;
      case "Difficulty":
        this.selectedValue5 = star;
        this.data5 = this.selectedValue5;
        break;
      default:
        break;
    }
    
    console.log("Gameplay"+this.data);
    console.log("Music"+this.data2);
    console.log("Design"+this.data3);
    console.log("Story"+this.data4);
    console.log("Difficulty"+this.data5);
  }

  //for adding star

  addClass(star: number, type: string) {
    if (this.isMouseover) {
      switch (type) {
        case "Gameplay":
          this.selectedValue = star;
          this.data = this.selectedValue;
          break;
        case "Music":
          this.selectedValue2 = star;
          this.data2 = this.selectedValue;
          break;
        case "Design":
          this.selectedValue3 = star;
          this.data3 = this.selectedValue;
          break;
        case "Story":
          this.selectedValue4 = star;
          this.data4 = this.selectedValue;
          break;
        case "Difficulty":
          this.selectedValue5 = star;
          this.data5 = this.selectedValue;
          break;
        default:
          break;
      }
      
      // console.log(this.selectedValue);
      // console.log(this.selectedValue2);
      // console.log(this.selectedValue3);
      // console.log(this.selectedValue4);
      // console.log(this.selectedValue5);

    }
  }

  //for removing star

  removeClass() {
    if (this.isMouseover) {
      this.selectedValue = 0;
      this.selectedValue2 = 0;
      // console.log(this.selectedValue);
    }
  }

  subscribePost(){
    if(this.selectedValue != null && this.selectedValue2 != null && this.selectedValue3 != null && this.selectedValue4 != null && this.selectedValue5 != null){
      const selectedValues = {
        teamId: "apreslamort",
        gameplay: this.selectedValue,
        music: this.selectedValue2,
        design: this.selectedValue3,
        story: this.selectedValue4,
        difficulty: this.selectedValue5
      };
      this.httpService.postSelectedValues(selectedValues).subscribe(response => {
        console.log(response);
      });
    }
  }

}
