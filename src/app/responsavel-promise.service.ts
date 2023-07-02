import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Responsavel } from './responsavel.model';

@Injectable({
  providedIn: 'root'
})
export class ResponsavelPromiseService {

  URL = 'http://localhost:3000/responsavel';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(private httpClient: HttpClient) {}

  /*Metodo toPromise() deprecat em httpClient
  getById(id: String): Promise<Responsavel> {
    return this.httpClient.get<Responsavel>(`${this.URL}/${id}`).toPromise();
  }

  getByNome(nome: string): Promise<Responsavel[]> {
    return this.httpClient.get<Responsavel[]>(`${this.URL}/${nome}`).toPromise();
  }

  save(responsavel: Responsavel): Promise<Responsavel> {
    return this.httpClient
      .post<Responsavel>(this.URL, JSON.stringify(responsavel), this.httpOptions)
      .toPromise();
  }

  patch(responsavel: Responsavel): Promise<Responsavel> {
    return this.httpClient
      .patch<Responsavel>(
        `${this.URL}/${responsavel.id}`,
        JSON.stringify(responsavel),
        this.httpOptions
      )
      .toPromise();
  }

  update(responsavel: Responsavel): Promise<Responsavel> {
    return this.httpClient
      .put<Responsavel>(
        `${this.URL}/${responsavel.id}`,
        JSON.stringify(responsavel),
        this.httpOptions
      )
      .toPromise();
  }
  */


}
