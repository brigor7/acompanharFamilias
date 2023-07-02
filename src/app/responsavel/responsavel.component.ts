import { Component, OnInit, ViewChild } from '@angular/core';
import { Responsavel } from '../responsavel.model';
import { NgForm } from '@angular/forms';
import { Shared } from '../util/shared';
import { ResponsavelStorageService } from '../responsavel-storage.service';
import { ResponsavelService } from '../responsavel.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-responsavel',
  templateUrl: './responsavel.component.html',
  styleUrls: ['./responsavel.component.css']
})
export class ResponsavelComponent {
  @ViewChild('form') form!: NgForm;

  responsavel!:Responsavel;
  responsaveis?:Responsavel[];

  isSubmitted!: boolean;
  isShowMessage: boolean = false;
  isSuccess!: boolean;
  message!: string;

  constructor(private responsavelServiceSW: ResponsavelStorageService, private responsavelService:ResponsavelService){}

  ngOnInit(): void {
    Shared.initializeWebStorage();
    //this.responsavel = new Responsavel("14","Bruno Igor", new Date(),"Rua da Felicidade, 7","Luziania","GO","72850210");
    this.responsavel = this.novoResponsavel();
    this.responsaveis = [];
    this.listarTodosResponsaveis();
    this.form.reset();
  }

  novoResponsavel(){
    return new Responsavel("","",new Date(),"","","","");
  }

  listarTodosResponsaveis(){
    this.responsavelService.getAll().subscribe(response =>{
      response.map(item =>{
        this.responsaveis?.push(new Responsavel(item.id, item.nome, item.aniversario, item.endereco, item.cidade, item.uf, item.cep));
     });
   });
  }

  buscarMaxIdBD():Subscription{
     return this.responsavelService.getByMaxId().subscribe(item =>{
      return item.id;
   });
  }

  onSubmit(){
    this.isSubmitted = true;
    const nextId = this.buscarMaxIdBD().toString;
    //this.responsavel.id = nextId.toString;

    this.cadastrarResponsavelBD();
    this.cadastrarResponsavelStorage();


    this.form.reset();
    this.responsavel = this.novoResponsavel();
    this.responsaveis = this.responsavelServiceSW.getResponsaveis();
  }


  cadastrarResponsavelBD(){

    this.responsavelServiceSW.save(this.responsavel);
    //if (!this.responsavelService.isExist(this.responsavel.id)) {
    //} else {
      this.responsavelServiceSW.update(this.responsavel);
    //}
    this.isShowMessage = true;
    this.isSuccess = true;
    this.message = 'Cadastro realizado com sucesso!';

    this.form.reset();
    this.responsavel = this.novoResponsavel();

    //this.responsaveis = this.responsavelService.getResponsaveis();
  }

  cadastrarResponsavelStorage(){
    if (!this.responsavelServiceSW.isExist(this.responsavel.nome)) {
      this.responsavelServiceSW.save(this.responsavel);
    } else {
      this.responsavelServiceSW.update(this.responsavel);
    }
    this.isShowMessage = true;
    this.isSuccess = true;
    this.message = 'Cadastro realizado com sucesso!';

    this.form.reset();
    this.responsavel = this.novoResponsavel();

    this.responsaveis = this.responsavelServiceSW.getResponsaveis();
  }

  //@param responsavel;
  onEdit(responsavel: Responsavel){
    let clone = Responsavel.clone(responsavel);
    this.responsavel = clone;
  }

  onDelete(nome: string){
    let confirmation = window.confirm(
      'Você tem certeza que deseja remover ' + nome
    );
    if (!confirmation) {
      return;
    }
    let response: boolean = this.responsavelServiceSW.delete(nome);
    this.isShowMessage = true;
    this.isSuccess = response;
    if (response) {
      this.message = 'O item foi removido com sucesso!';
    } else {
      this.message = 'Opps! O item não pode ser removido!';
    }
    this.responsaveis = this.responsavelServiceSW.getResponsaveis();
  }

}



