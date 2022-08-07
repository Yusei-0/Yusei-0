import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-button-large-icon',
  templateUrl: './button-large-icon.component.html',
  styleUrls: ['./button-large-icon.component.css']
})
export class ButtonLargeIconComponent implements OnInit {


  styles: string = '';

  @Input()
  text: string  = "Texto base"; 

  @Input()
  icon: string = "No icon";

  @Input()
  type: 'primary' | 'secondary'| 'terciary'|'outline'|'none' = 'none';

  constructor() { }

  ngOnInit(): void {

    //Añadiendo el icono por input
    if(this.icon !== "No icon")
      this.styles=`background-image: url('../../../../assets/icons/${this.icon}');`;

    //Escogiendo el color de la letra segun el tipo
    // if(this.type == 'outline')
    // this.styles = this.styles+`color : var(--color-primary)`;

    // else
    // this.styles = this.styles+`color : var(--soft-white)`;
  }

}
