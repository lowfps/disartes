import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-cascadas',
    templateUrl: './cascadas.component.html',
    styleUrls: ['./cascadas.component.css'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class CascadasComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
