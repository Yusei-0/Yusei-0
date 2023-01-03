import { Injectable } from '@angular/core';
import { Period } from '../models/period.model';
import { Twit } from '../models/twit.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private twitts: Twit[] = [
    {
    imgUrl:'',
    name: 'El gato programador',
    username: '@jusephortiz_',
    text: 'Cuando entiendes a la perfección flexbox y grid pierdes el miedo de maquetar cualquier cosa...',
    hashtag: '#CSS #flexbox #grid',
    twitterUrl: ''
  },
    {
    imgUrl:'',
    name: 'El gato programador',
    username: '@jusephortiz_',
    text: 'A veces siento q es divertido programar todo desde cero sin ningún framework de por medio. Me hace sentir q  se bastante, eso hasta que las cosas se empiezan a complicar y en algún punto empiezo a traer librerías. Ya para ese punto había dejado de ser divertido',
    hashtag: '#easyframeworks',
    twitterUrl: ''
  },
]

  private periodsOfEducation: Period[]=[
    {
      start : '2016',
      finish : '2018',
      description : 'Mis estudios en programación comienzan en el 2016 cuando me comenzé a prepararme para el concurso de programación nacional sub 19. Esta preparación la hice en el Centro de entrenamiento Provincial de Santiago de Cuba situado en el IPVCE Antonio Maceo. Como resultado de esta preparación en 2017 y 2018 obtuve medalla de plata nacional en estos concursos.',
      img : 'IPVCE.jfif',
      school: 'IPVCE'
    },
    {
      start : '2019',
      finish : '2022',
      description: 'En el 2019 comienzo mis estudios universitarios en la UCI (Universidad de las Ciencias Informaticas) escuela donde me fue fácil adaptarme pues mis conocimientos previos en programación me fueron de muchas ayuda y me han permitido obtener resultados docentes sobresalientes.',
      img: 'UCI.jfif',
      school: 'UCI'
    },
    {
      start : '2022',
      finish: 'Actual',
      description : 'En marzo de 2022 obtuve la oportunidad de participar en un programa de estudios online sobre criptomonedas y smart contracts donde obtuve resultados sobresalientes y gané una beca para estudiar online en Platzi, plataforma que me está permitiendo llevar mis conocimientos a un nivel superior.',
      img: 'Platzi-redondo.webp',
      school: 'Platzi'
    }
  ]

  constructor() { }

  
  public get getTwitts() : Twit[]  {
    return this.twitts;
  }

  public get getPeriodsOfEducation() : Period[]{
    return this.periodsOfEducation;
  }
  
}
