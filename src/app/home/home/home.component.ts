import { Component, OnInit } from '@angular/core';
import { Twit } from 'src/app/core/models/twit.model';
import { DataService } from 'src/app/core/services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  twits: Twit[]= [];

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.twits = this.dataService.getTwitts
  }

}
