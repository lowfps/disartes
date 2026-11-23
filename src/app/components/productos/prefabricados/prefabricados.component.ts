import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-prefabricados',
    templateUrl: './prefabricados.component.html',
    styleUrls: ['./prefabricados.component.css'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class PrefabricadosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
