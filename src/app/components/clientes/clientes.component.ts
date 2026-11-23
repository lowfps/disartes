import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-clientes',
    templateUrl: './clientes.component.html',
    styleUrls: ['./clientes.component.css'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class ClientesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
