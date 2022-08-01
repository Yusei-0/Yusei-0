import { Component, Input, OnInit } from '@angular/core';
import { Twit } from 'src/app/core/models/twit.model';

@Component({
  selector: 'app-twit',
  templateUrl: './twit.component.html',
  styleUrls: ['./twit.component.css']
})
export class TwitComponent implements OnInit {

  @Input()
  twit!: Twit;

  constructor() { }

  ngOnInit(): void {
  }

}
