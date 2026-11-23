import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';

@Component({
    selector: 'app-contacto',
    templateUrl: './contacto.component.html',
    styleUrls: ['./contacto.component.css'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class ContactoComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  public sendEmail(e: Event) {
    e.preventDefault();
    emailjs
      .sendForm(
        'service_jkaibqa',
        'template_rcndmr6',
        e.target as HTMLFormElement,
        'user_Uv33iqaIja5VrPBzwoC5l'
      )
      .then(
        (result: EmailJSResponseStatus) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  }
}
