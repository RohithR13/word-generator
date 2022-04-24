import { Component } from '@angular/core';
import arrayWords from '../utils/words'
import arrayCountry from'../utils/country'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'word-generator';
  words ='';
  limit = 10;
  handleSlideChange(newLimit: number){
    this.limit =newLimit;
  }
  generateRandom(){
    this.limit =Math.floor(Math.random() * (arrayCountry.length + 1));
  }
  generate(){
    if(this.limit>arrayWords.length){
      alert("word count exceeds try less ")
    }
    this.words = arrayWords.slice(0,this.limit).join(' ');
  }
  generateCountry(){
    this.words = arrayCountry.slice(0,this.limit).join(' ');
  }
}
