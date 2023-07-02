import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders,HttpParams } from '@angular/common/http';

import { Responsavel } from './responsavel.model';
import { WebStorageUtil } from 'src/app/util/web-storage-util';
import { Observable } from 'rxjs';
import { RoutesAPI } from './util/routes-api';
import { ErrorUtil } from './util/error-util';
import { catchError } from 'rxjs/operators';
import { Constants } from './util/constants';


@Injectable({
  providedIn: 'root'
})
export class ResponsavelService {
  responsaveis!: Responsavel[]

  constructor(private httpClient: HttpClient) {}


  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };


  getAll(): Observable<Responsavel[]> {
    return this.httpClient.get<Responsavel[]>(`${RoutesAPI.URL_RESPONSAVEL_DB}`);
  }

  getById(id: string): Observable<Responsavel> {
    var endereco = `${RoutesAPI.URL_RESPONSAVEL_DB + Constants.ID_EQUALS+id}`;
    var endereco2 = `${RoutesAPI.URL_RESPONSAVEL_DB}/${id}`;
    return this.httpClient.get<Responsavel>(`${RoutesAPI.URL_RESPONSAVEL_DB}/${id}`);
  }

/*
  getByMaxId(): Observable<Responsavel> {
    return this.httpClient.get<Responsavel>(`${RoutesAPI.URL_RESPONSAVEL_DB + Constants.ID_ORDERBY_DESC_LIMIT_UM}`);
  }

  patch(responsavel: Responsavel): Observable<Responsavel> {
    return this.httpClient.patch<Responsavel>(
      `${RoutesAPI.URL_RESPONSAVEL_DB}/${responsavel.id}`,
      JSON.stringify(responsavel),
      this.httpOptions
    );
  }

  updateResponsavel(responsavel:Responsavel): Observable<any> {
    const headers = { 'content-type': 'application/json'}
    const body=JSON.stringify(responsavel);

    return this.httpClient.put(`${RoutesAPI.URL_RESPONSAVEL_DB}`, body,{'headers':headers , observe: 'response'})
  }


*/

  update(responsavel: Responsavel): Observable<Responsavel> {
    return this.httpClient.put<Responsavel>(
      `${RoutesAPI.URL_RESPONSAVEL_DB}/${responsavel.id}`,
      JSON.stringify(responsavel),
      this.httpOptions
    );
  }

  delete(id: string):Observable<Responsavel>{
    return this.httpClient.delete<Responsavel>(
      `${RoutesAPI.URL_RESPONSAVEL_DB}/${id}`
    );
  }

  save(responsavel:Responsavel): Observable<any> {
    const headers = { 'content-type': 'application/json'}
    const body=JSON.stringify(responsavel);

    return this.httpClient.post(`${RoutesAPI.URL_RESPONSAVEL_DB}`, body,{'headers':headers , observe: 'response'})
  }

  buscarResponsavel(responsavel:Responsavel): Observable<any> {
    return this.httpClient.get(`${RoutesAPI.URL_RESPONSAVEL_DB}` + '/' +responsavel.id);
  }

}
