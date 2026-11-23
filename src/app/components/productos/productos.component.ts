import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-productos',
    templateUrl: './productos.component.html',
    styleUrls: ['./productos.component.css'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class ProductosComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
