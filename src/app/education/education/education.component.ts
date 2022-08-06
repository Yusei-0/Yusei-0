import { Component, OnInit } from '@angular/core';
import { Period } from 'src/app/core/models/period.model';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {

  periods : Period[] = []

  constructor() { }

  ngOnInit(): void {
  }

}
