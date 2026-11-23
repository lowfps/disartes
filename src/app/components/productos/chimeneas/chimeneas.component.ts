import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-chimeneas',
    templateUrl: './chimeneas.component.html',
    styleUrls: ['./chimeneas.component.css'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class ChimeneasComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
