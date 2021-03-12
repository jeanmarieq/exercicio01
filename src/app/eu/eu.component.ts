import { Component, OnInit } from '@angular/core';
import { EuService } from '../services/eu.service'
@Component({
  selector: 'app-eu',
  templateUrl: './eu.component.html',
  styleUrls: ['./eu.component.css']
})
export class EuComponent implements OnInit {

  nome: string;

  idade: number;

  nacionalidade: string;

  coisas_que_gosto: string;

  constructor(nome: EuService, idade: EuService, nacionalidade: EuService, coisas_que_gosto: EuService) { 
    this.nome = nome.getNome();
    this.idade = idade.getIdade();
    this.nacionalidade = nacionalidade.getNacionalidade();
    this.coisas_que_gosto = coisas_que_gosto.getDados();

  }
  urlImagem: string = './assets/IMG_2.jpg';

  ngOnInit(): void {
  }

}
