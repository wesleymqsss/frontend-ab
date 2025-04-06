import { Component, signal } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-form-ong',
  standalone: false,
  templateUrl: './form-ong.component.html',
  styleUrl: './form-ong.component.scss',

})
export class FormOngComponent {
  hide = signal(true);
  clickEvent(event: MouseEvent) {
    this.hide.set(!this.hide());
    event.stopPropagation();
  }

onSubmit(form: NgForm){

}
}
