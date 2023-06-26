import { Component, OnInit } from '@angular/core';
import { Responsavel } from '../responsavel.model';

@Component({
  selector: 'app-responsavel',
  templateUrl: './responsavel.component.html',
  styleUrls: ['./responsavel.component.css']
})
export class ResponsavelComponent {
  responsavel!:Responsavel;

  ngOnInit(): void {

  }
}
