import { Component, Input, OnInit } from '@angular/core';
import { Period } from 'src/app/core/models/period.model';

@Component({
  selector: 'app-period',
  templateUrl: './period.component.html',
  styleUrls: ['./period.component.css']
})
export class PeriodComponent implements OnInit {

  @Input()
  period : Period = {
    start : '0000',
    finish : '0000',
    description : 'Lorem ipsum doro...',
    img : '',
    school: ''
  }

  constructor() { }

  ngOnInit(): void {
  }

}
