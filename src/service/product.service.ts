import { Injectable } from '@angular/core';
import {Produto} from '../model/produto';
// chamar TestandoService
import { TestandoService } from './testando.service';
@Injectable()
// @Injectable é "pai" - de @Component, @Pipe, @Directive, @Input, @Output



export class ProductService {
  // praticar a referencia da instancia para estabelecer a injeção de dependecia

  constructor(private resultadoTeste: TestandoService) { 
    this.resultadoTeste.unitario('construtor chamado/construido com sucesso total!')
  }

  // 1º Parte - definir uma função para gerar a view - assim que for
  // vinculada - uma lista de produtos e transporta-las para o componente
  gerarListaProdutos(){
    // testar o metodo/função e seu funcionamento
    this.resultadoTeste.unitario('Método/função gerarListaProduto() chamado com sucesso total!')

    // 2º Parte - criar uma propriedade  - que sera definida com o tipo construido
    // a partir do model - para que se torne a lista de produtos
    let listaProdutos: Produto[]
    // 3º Parte - Criar os produtos que irão compor a nossa lista
    listaProdutos  = [
      // instancia da classe Produto() - o model - para, a partir dos paramentros indicados
      // no construtor da classe produt(), possa ser gerada.
      new Produto(1, 'Quadro Baby Woda', 199.89),
      new Produto(2, 'Mascara Darth Vader', 159.79),
      new Produto(3, 'LilghtSaber', 89.99),
      new Produto(4, 'Estrala da morte Miniatura', 39.69),
      new Produto(5, 'Boneco Storm Trooper', 59.25 ),
      new Produto(6, 'Miniatura Princesa Leia', 49.99),
      new Produto(7, 'Miniatura Hot Weels', 19.89)
    ]
    // testar o retorno da lista de produtos 
    // para verificar se esta sendo "montada" de maneira adequada
    this.resultadoTeste.unitario('listaProdutos')

    // 4º Parte - - retornar a lista criada quando o metodo/funcao
    // gerarListaProdutos - for chamada a execução
    return listaProdutos
  }
}
