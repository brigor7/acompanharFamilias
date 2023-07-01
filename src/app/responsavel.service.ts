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

  getByMaxId(): Observable<Responsavel> {
    return this.httpClient.get<Responsavel>(`${RoutesAPI.URL_RESPONSAVEL_DB + Constants.ID_ORDERBY_DESC_LIMIT_UM}`);
  }

  getById(id: string): Observable<Responsavel[]> {
    const query: HttpParams = new HttpParams().set('id', id);
    const options = id ? { params: query } : {};

    return this.httpClient.get<Responsavel[]>(`${RoutesAPI.URL_RESPONSAVEL_DB}`, options).pipe(
      //map((responsavel: Responsavel[])=>responsavel[0]),
      catchError(ErrorUtil.handleError)
    );
  }

  save(responsavel: Responsavel): Observable<Responsavel> {
    return this.httpClient.post<Responsavel>(
      `${RoutesAPI.URL_RESPONSAVEL_DB}`,
      responsavel,
      this.httpOptions
    );
  }

  patch(responsavel: Responsavel): Observable<Responsavel> {
    return this.httpClient.patch<Responsavel>(
      `${RoutesAPI.URL_RESPONSAVEL_DB}/${responsavel.id}`,
      responsavel,
      this.httpOptions
    );
  }

  update(responsavel: Responsavel): Observable<Responsavel> {
    return this.httpClient.put<Responsavel>(
      `${RoutesAPI.URL_RESPONSAVEL_DB}/${responsavel.id}`,
      responsavel,
      this.httpOptions
    );
  }

}
