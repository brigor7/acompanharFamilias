export class Responsavel {
 public id:string;
 public nome:string;
 public aniversario:Date;
 public endereco:string;
 public cidade:string;
 public cep:string;

  constructor(_id: string, _nome:string, _aniversario:Date, _endereco:string, _cidade:string, _cep:string){
    this.id = _id;
    this.nome = _nome;
    this.aniversario = _aniversario;
    this.endereco = _endereco;
    this.cidade = _cidade;
    this.cep = _cep;
  }

/*
  public set id(value:string){
    this.id = value;
  }

  public get id():string{
    return this.id;
  }


  public set nome(value:string){
    this._nome = value;
  }

  public get nome():string{
    return this._nome;
  }


  public set aniversario(value:Date){
    this._aniversario = value;
  }

  public get aniversario():Date{
    return this._aniversario;
  }

  public set cidade(value:string){
    this._cidade = value;
  }

  public get cidade():string{
    return this._cidade;
  }

  public set cep(value:string){
    this._cep = value;
  }

  public get cep():string{
    return this._cep;
  }

  public set endereco(value:string){
    this._endereco = value;
  }

  public get endereco():string{
    return this._endereco;
  }
  */

  /**
   * Transforma um objeto passado como argumento e retorna novo objeto com os dados
   * @param responsavel
   * @returns
   */
  public static clone(responsavel: Responsavel) {
    let r: Responsavel = new Responsavel(responsavel.id, responsavel.nome, responsavel.aniversario, responsavel.endereco, responsavel.cidade, responsavel.cep);
    r.id = responsavel.id;
    r.nome = responsavel.nome;
    r.aniversario = responsavel.aniversario;
    r.endereco = responsavel.endereco;
    r.cidade = responsavel.cidade;
    r.cep = responsavel.cep;
    return r;
  }

  /**
   * Transforma um objeto pego da API para a versão salva no WebStorage
   * @param responsavel
   * @returns
   */
  public static toWS(responsavel: Responsavel) {
    let r: Responsavel = new Responsavel(responsavel.id, responsavel.nome, responsavel.aniversario, responsavel.endereco, responsavel.cidade, responsavel.cep);
    r.nome = responsavel.nome;
    r.aniversario = responsavel.aniversario;
    r.endereco = responsavel.endereco;
    r.cidade = responsavel.cidade;
    r.cep = responsavel.cep;
    return r;
  }




}
