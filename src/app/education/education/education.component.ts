import { Component, OnInit } from '@angular/core';
import { Period } from 'src/app/core/models/period.model';
import { DataService } from 'src/app/core/services/data.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {

  periods : Period[] = []

  constructor(
    private data: DataService
  ) { }

  ngOnInit(): void {
    this.periods = this.data.getPeriodsOfEducation;
  }

}
