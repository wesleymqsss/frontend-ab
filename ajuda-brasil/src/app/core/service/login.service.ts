import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UsuarioLogado } from '../types/login';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private apiUrl = "http://localhost:3000/login";

  constructor(private http: HttpClient) { }

  getUser(email: string, senha: string): Observable<UsuarioLogado>{
    const params = new HttpParams({
      fromObject: {
        email: email,
        senha: senha
      }
    })

    return this.http.get<UsuarioLogado>(`${this.apiUrl}`, {params})
  }

}
