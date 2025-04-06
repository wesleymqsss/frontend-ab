declare const bootstrap: any;
import { Component, signal } from '@angular/core';
import { OngService } from '../../core/service/ong.service';
import { SnackBarService } from '../../core/service/snack-bar.service';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
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

  showToast(): void {
    const toastElement = document.getElementById('liveToast'); 
    if (toastElement) {
     const toast = new bootstrap.Toast(toastElement); 
      toast.show();
    }
  }
}
