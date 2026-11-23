import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-otros',
    templateUrl: './otros.component.html',
    styleUrls: ['./otros.component.css'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class OtrosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
