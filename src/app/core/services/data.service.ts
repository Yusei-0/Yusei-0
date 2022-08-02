import { Injectable } from '@angular/core';
import { Twit } from '../models/twit.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private twitts: Twit[] = [{
    imgUrl:'',
    name: 'El gato programador',
    username: '@jusepheor_',
    text: 'Cuando entiendes a la perfección flexbox y grid pierdes el miedo de maquetar cualquier cosa...',
    hashtag: '#CSS #flexbox #grid',
    twitterUrl: ''
  }]

  constructor() { }

  
  public get getTwitts() : Twit[]  {
    return this.twitts;
  }
  
}
