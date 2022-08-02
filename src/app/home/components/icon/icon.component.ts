import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.css']
})
export class IconComponent implements OnInit {

  
    styles:string='';

    @Input()
    img:string = '';

  constructor() { }

  ngOnInit(): void {
    this.styles=`background-image: url('../../../../assets/icons/${this.img}.svg')`;
  }

}
