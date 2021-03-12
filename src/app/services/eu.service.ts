import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EuService {

  nome: string;
  idade: number;
  nacionalidade: string;
  dados: any [];
  

  constructor() { 
    this.nome = 'Jeanmarie Quijada';
    this.idade = 33;
    this.nacionalidade = 'Venezuelana';
    this.dados = [
      'Asistir filmes', 
      'Ouvir música', 
      'Passeios ao ar livre',
    ];
  
  }

  getNome(): string {
    return this.nome;
  }

  getIdade(): number {
    return this.idade;
  }

  getNacionalidade(): string {
    return this.nacionalidade;
  }

  getDados(): any {
    return this.dados;
  }

}
