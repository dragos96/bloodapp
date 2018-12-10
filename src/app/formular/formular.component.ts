import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-formular',
  templateUrl: './formular.component.html',
  styleUrls: ['./formular.component.css']
})
export class FormularComponent implements OnInit {
  bauturiAlcoolice: boolean = false;
  tatuajeC: boolean = false;

  @Input() userObject;
  constructor() { }

  ngOnInit() {
  }

  canIDonate(tatuajeC, bauturiAlcoolice, ultimaDonare) {
    console.log('ultima donare: ' + ultimaDonare);
    let canDonate: boolean = true;
    if (tatuajeC)
      canDonate = false;
    if (bauturiAlcoolice)
      canDonate = false;
    if (typeof ultimaDonare === 'undefined' ||  ultimaDonare < 6)
      canDonate = false;
    
    if(canDonate){
      alert('Puteti dona');
    }else{
      alert('Nu puteti dona');
    }
  }

}
