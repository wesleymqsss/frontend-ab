declare const bootstrap: any;
import { Component, signal } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginService } from '../../core/service/login.service';
import { UsuarioLogado } from '../../core/types/login';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  usuarioLogado!: UsuarioLogado;
  formattedDate!: string;
  usuarioLogadoInput: boolean = false;

  constructor(
    private readonly _login: LoginService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.dateNow();
    
  }

  hide = signal(true);
  clickEvent(event: MouseEvent) {
    this.hide.set(!this.hide());
    event.stopPropagation();
  }

  onSubmit(form: NgForm) {
    if (form.valid) {
      const dataForm = form.value;
      console.log(dataForm)
      this._login.getUser(dataForm.email, dataForm.senha).subscribe({
        next: (data) => {
          this.usuarioLogado = data;
          if (!this.usuarioLogado || Object.keys(this.usuarioLogado).length === 0) {
            console.log('Array vazio ou usuário não encontrado');
            this.showToast();
          } else{
              this.routerClick('/home');
              this.usuarioLogadoInput = true;
          }
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

  routerClick(route: string): void{
    this.router.navigate([route])
  }

  dateNow(){
    const DATE_NOW =  new Date();
    return this.formattedDate = `${DATE_NOW.getDate().toString().padStart(2, '0')}/${(DATE_NOW.getMonth() + 1).toString().padStart(2, '0')}/${DATE_NOW.getFullYear()}`;
  }
}
