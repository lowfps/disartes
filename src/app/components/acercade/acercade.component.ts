import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-acercade',
    templateUrl: './acercade.component.html',
    styleUrls: ['./acercade.component.css'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class AcercadeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
