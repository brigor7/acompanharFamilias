import { Responsavel } from './../responsavel.model';
import { Constants } from './constants';


export class Shared {
  constructor() {}

  /**
	Cadastra um usuário default para funcionamento do login.
	Só realiza o cadastro caso o usuário ainda não esteja salvo no WebStorage.
*/
  public static initializeWebStorage(): void {
    if (localStorage.getItem(Constants.RESPONSAVEIS_KEY) != null) {
      return;
    }

    //let responsavel = new Responsavel("",new Date(),"","","","");
    //localStorage.setItem(Constants.RESPONSAVEIS_KEY, JSON.stringify(responsavel));
  }
}
