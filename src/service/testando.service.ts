import { Injectable } from '@angular/core';

@Injectable()

export class TestandoService {

  constructor() { }

  // Criar um metodo / função para verificar se cada um dos "Pedaços" de 
  // product.services.ts esta funcionando adequadamente
  unitario(mensagem: any){
    // uso da função auxiliar log() para exibir o conteudo no console
    console.log(mensagem)
  }
}
