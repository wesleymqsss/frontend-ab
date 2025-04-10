import { Component, signal } from '@angular/core';
import { NgForm } from '@angular/forms';
import { OngService } from '../../core/service/ong.service';
import { SnackBarService } from '../../core/service/snack-bar.service';

interface Food {
  value: number;
  viewValue: string;
}


@Component({
  selector: 'app-form-ong',
  standalone: false,
  templateUrl: './form-ong.component.html',
  styleUrl: './form-ong.component.scss',

})
export class FormOngComponent {
  foods: Food[] = [
    { value: 1, viewValue: 'Sou ONG' },
    { value: 2, viewValue: ' Sou Doador' },
  ];

  dataForm = {
    tipo_perfil: null,
  };

  constructor(
    private readonly ongService: OngService,
    private readonly _snackBarService: SnackBarService
  ) { }

  hide = signal(true);
  clickEvent(event: MouseEvent) {
    this.hide.set(!this.hide());
    event.stopPropagation();
  }

  onSubmit(form: NgForm) {
    if (form.valid) {
      const dataForm = form.value;
      this.ongService.ongCreate(dataForm).subscribe({
        next: () => {
          this._snackBarService.sucessSnackBar("ONG Cadastrada com sucesso!!!", "Ok");
          form.reset();
        },
        error: (err) => {
          console.log('error ao enviar os dados', err)
        }
      })
    }
  }
}
