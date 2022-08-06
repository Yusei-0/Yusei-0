import { Injectable } from '@angular/core';
import { Twit } from '../models/twit.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private twitts: Twit[] = [
    {
    imgUrl:'',
    name: 'El gato programador',
    username: '@jusepheor_',
    text: 'Cuando entiendes a la perfección flexbox y grid pierdes el miedo de maquetar cualquier cosa...',
    hashtag: '#CSS #flexbox #grid',
    twitterUrl: ''
  },
    {
    imgUrl:'',
    name: 'El gato programador',
    username: '@jusepheor_',
    text: 'A veces siento q es divertido programar todo desde cero sin ningún framework de por medio. Me hace sentir q  se bastante, eso hasta que las cosas se empiezan a complicar y en algún punto empiezo a traer librerías. Ya para ese punto había dejado de ser divertido',
    hashtag: '#easyframeworks',
    twitterUrl: ''
  },
 
]

  constructor() { }

  
  public get getTwitts() : Twit[]  {
    return this.twitts;
  }
  
}
