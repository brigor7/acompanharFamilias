export class Responsavel {
 private id?:string;
 private _nome:string;
 private _aniversario:Date;
 private _endereco:string;
 private _cidade:string;
 private _uf:string;
 private _cep:string;

  constructor(nome:string, aniversario:Date, endereco:string, cidade:string,  uf:string, cep:string){
    this._nome = nome;
    this._aniversario = aniversario;
    this._endereco = endereco;
    this._cidade = cidade;
    this._uf = uf;
    this._cep = cep;
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

  public set uf(value:string){
    this._uf = value;
  }

  public get uf():string{
    return this._uf;
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







}