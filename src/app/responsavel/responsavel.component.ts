import { Component, OnInit, ViewChild } from '@angular/core';
import { Responsavel } from '../responsavel.model';
import { NgForm } from '@angular/forms';
import { Shared } from '../util/shared';
import { ResponsavelStorageService } from '../responsavel-storage.service';

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

  constructor(private responsavelService: ResponsavelStorageService){}

  ngOnInit(): void {
    Shared.initializeWebStorage();
    //let data = new Date();
    //data.toLocaleDateString("pt-|BR");
    this.responsavel = new Responsavel("", new Date(),"","","","");
    this.responsaveis = this.responsavelService.getResponsaveis();
  }

  onSubmit(){
    this.isSubmitted = true;

    if (!this.responsavelService.isExist(this.responsavel.nome)) {
      this.responsavelService.save(this.responsavel);
    } else {
      this.responsavelService.update(this.responsavel);
    }
    this.isShowMessage = true;
    this.isSuccess = true;
    this.message = 'Cadastro realizado com sucesso!';

    this.form.reset();
    this.responsavel = new Responsavel("",new Date(),"","","","");

    this.responsaveis = this.responsavelService.getResponsaveis();

    this.responsavelService.notifyTotalUsers();

    this.form.reset();
    this.responsavel = new Responsavel("",new Date(),"","","","");
    this.responsaveis = this.responsavelService.getResponsaveis();
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
    let response: boolean = this.responsavelService.delete(nome);
    this.isShowMessage = true;
    this.isSuccess = response;
    if (response) {
      this.message = 'O item foi removido com sucesso!';
    } else {
      this.message = 'Opps! O item não pode ser removido!';
    }
    this.responsaveis = this.responsavelService.getResponsaveis();
    //this.responsavelService.notifyTotalUsers();
  }

}



