import { BehaviorSubject, Observable } from 'rxjs';

import { Constants } from 'src/app/util/constants';
import { Injectable } from '@angular/core';
import { WebStorageUtil } from 'src/app/util/web-storage-util';
import { Responsavel } from './responsavel.model';

@Injectable({
  providedIn: 'root',
})
export class ResponsavelStorageService {
  responsaveis!: Responsavel[];
  private responsavelSource!: BehaviorSubject<number>;
  constructor() {
    this.responsaveis = WebStorageUtil.get(Constants.RESPONSAVEIS_KEY);
    //this.responsavelSource = new BehaviorSubject<number>(this.responsaveis.length);
  }

  save(responsavel: Responsavel) {
    this.responsaveis = WebStorageUtil.get(Constants.RESPONSAVEIS_KEY);
    this.responsaveis.push(responsavel);
    WebStorageUtil.set(Constants.RESPONSAVEIS_KEY, this.responsaveis);
  }

  update(responsavel: Responsavel) {
    this.responsaveis = WebStorageUtil.get(Constants.RESPONSAVEIS_KEY);
    this.delete(responsavel.nome);
    this.save(responsavel);
  }



  delete(nome: string): boolean {
    this.responsaveis = WebStorageUtil.get(Constants.RESPONSAVEIS_KEY);
    this.responsaveis = this.responsaveis.filter((r) => {
      return r.nome?.valueOf() != nome?.valueOf();
    });

    WebStorageUtil.set(Constants.RESPONSAVEIS_KEY, this.responsaveis);
    return true;
  }

  isExist(value: string): boolean {
    this.responsaveis = WebStorageUtil.get(Constants.RESPONSAVEIS_KEY);

    for (let r of this.responsaveis) {
      if (r.nome?.valueOf() == value?.valueOf()) {
        return true;
      }

    }
    return false;
  }

  getResponsaveis(): Responsavel[] {
    this.responsaveis = WebStorageUtil.get(Constants.RESPONSAVEIS_KEY);
    return this.responsaveis;
  }

  notifyTotalUsers() {
    //this.responsavelSource.next(this.getResponsaveis()?.length);
    // if (this.getUsers()?.length > 1) {
    //   this.userSource.complete();
    // }
  }

  //asObservable(): Observable<number> {
    //return this.responsavelSource;
    //return this.responsavelSource.asObservable()
 // }
}

