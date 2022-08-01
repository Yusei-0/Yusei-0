import { Component, OnInit } from '@angular/core';
import { Twit } from 'src/app/core/models/twit.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  twits: Twit[]= [];

  constructor() { }

  ngOnInit(): void {
  }

}
