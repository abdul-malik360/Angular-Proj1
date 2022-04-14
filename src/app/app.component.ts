import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'AngProjOne';
  message: string = 'string interpolation ';
  imgUrl: string =
    'https://www.rain.co.za/assets/images/product-images/fiveg_home.png';
  bool: boolean = false;
  buttonClick() {
    console.log('button works');
    this.bool = true;
  }
  userName: string = '';

  onKeyup() {
    console.log(this.userName);
    this.userName;
  }

  postArray: Array<string> = [
    'Post 1 ',
    'Post 2 ',
    'Post 3 ',
    'Post 4 ',
    'Post 5 ',
  ];

  objArray: Array<any> = [
    { id: 1, postTitle: 'Post 1' },
    { id: 2, postTitle: 'Post 2' },
    { id: 3, postTitle: 'Post 3' },
    { id: 4, postTitle: 'Post 4' },
  ];

  constructor() {
    for (let i = 0; i < this.postArray.length; i++) {
      console.log(this.postArray[i]);
    }
  }

  newObjArray: Array<any> = [
    { id: 5, postTitle: 'Post 5' },
    { id: 6, postTitle: 'Post 6' },
    { id: 7, postTitle: 'Post 7' },
    { id: 8, postTitle: 'Post 8' },
    { id: 9, postTitle: 'Post 9' },
  ];

  onDelete(index: any) {
    this.objArray.splice(index, 1);
  }

  onDeleteNew(index: any) {
    this.newObjArray.splice(index, 1);
  }
}
