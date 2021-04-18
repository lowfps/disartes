import { Component, OnInit } from '@angular/core';

//Imagenes
import { Foto } from "../../../models/foto.model";
import { ARREGLO_CERAMICA } from "../../../mocks/foto.mock";

@Component({
  selector: 'app-ceramica',
  templateUrl: './ceramica.component.html',
  styleUrls: ['./ceramica.component.css']
})
export class CeramicaComponent implements OnInit {

  public miArreglo: Foto[]

  constructor() { 
    this.miArreglo = ARREGLO_CERAMICA;
  }

  ngOnInit(): void {
  }

}
