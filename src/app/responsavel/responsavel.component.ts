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
  responsavelCopia!:Responsavel;
  responsaveis?:Responsavel[];

  isSubmitted!: boolean;
  isShowMessage: boolean = false;
  isSuccess!: boolean;
  message!: string;
  isUpdateData!:boolean;

  constructor(private responsavelServiceSW: ResponsavelStorageService, private responsavelService:ResponsavelService){}

  ngOnInit(): void {
    Shared.initializeWebStorage();
    this.responsavel = this.novoResponsavel();
    this.responsavelCopia = Responsavel.clone(this.responsavel);
    this.responsaveis = [];
    this.isUpdateData = false;
    this.listarTodosResponsaveis();
  }

  novoResponsavel(){
    return new Responsavel(this.gerarId(),"",new Date(),"","","");
  }

  gerarId():string{
    return Math.floor(Date.now() * Math.random()).toString(32);
  }

  listarTodosResponsaveis(){
    this.responsaveis = [];
    this.responsavelService.getAll().subscribe(response =>{
      response.map(item =>{
        this.responsaveis?.push(new Responsavel(item.id, item.nome, item.aniversario, item.endereco, item.cidade, item.cep));
     });
   });
  }

  onSubmit(){
    this.isSubmitted = true;
    this.cadastrarResponsavelBD();
   // this.cadastrarResponsavelStorage();
    this.form.reset();
    this.responsavel = this.novoResponsavel();
    this.listarTodosResponsaveis();
  }


  cadastrarResponsavelBD(){
    if (this.isUpdateData){
      this.responsavelService.update(this.responsavel).subscribe(data =>{
        console.log(data)
       });
       this.message = 'Cadastro ATUALIZADO com sucesso!';
    } else {
       this.responsavelService.save(this.responsavel).subscribe(data =>{
        console.log(data)
       });
       this.message = 'Cadastro INCLUIDO com sucesso!';
    }
    this.isShowMessage = true;
    this.isSuccess = true;


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
    this.isUpdateData = true;
  }

  onDelete(responsavel: Responsavel){
    let confirmation = window.confirm(
      'Você tem certeza que deseja remover ' + responsavel.nome + ' - id: '+ responsavel.id + '?'
    );
    if (!confirmation) {
      return;
    }
    this.responsavelService.delete(responsavel.id)
      .subscribe({
        next:data => {
          this.message = 'Cadastro EXCLUIDO com sucesso!';
          this.isSuccess = true;
        },
        error:error=>{
          this.message = 'Erro ao excluir registro. Motivo: ' + error.message;
          this.isSuccess = false;
          console.error(this.message, error);
        }
      });

    this.isShowMessage = true;
    this.listarTodosResponsaveis();
  }

}



