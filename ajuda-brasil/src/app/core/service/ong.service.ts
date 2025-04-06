import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ong, OngDetails } from '../types/ong';

@Injectable({
  providedIn: 'root'
})
export class OngService {

  private apiUrl = "http://localhost:3000/ong"
  private apiUrlDetails = "http://localhost:3000/ongDetails"

  constructor(private http: HttpClient) { }

  ongList(): Observable<Ong[]>{
    return this.http.get<Ong[]>(this.apiUrl);
  }

  ongDetails(cpfOrCnpj: string): Observable<OngDetails[]>{
    const params = new HttpParams().set('cpfOrCnpj', cpfOrCnpj);
    return this.http.get<OngDetails[]>(`${this.apiUrlDetails}`, { params })
  }
}
