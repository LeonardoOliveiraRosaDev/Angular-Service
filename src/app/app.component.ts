import { Component } from '@angular/core';
// Fazer a importação nescessária para consumir o nosso service
import { ProductService } from 'src/service/product.service';
import {Produto} from '../model/produto';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-service';
  // Definir a propriedade Titulo Componente
  tituloComp: string = 'Implementação Services'

  // 1º Parte - criar um elenco de propriedades  que serão usadas
  // para operar com o service
  // objService: any
  // esta sera propriedade será a coleção interavel de dados
  cestaProdutos!: Produto[]
  
  // indicar a presença do construtor
  // para referenciar  a instancia da classe ProdutoService
  constructor(private objService: ProductService){
    // este passo foi estabelecida a dependencia entre o componente
    // e o service do projeto da aplicação
    // Aqui ja existe uma dependencia daquilo que o service fornece como 
    // conteudo/funcionalidade
    // this.objService = new ProductService()
  }

  // 2º Parte - Acessar o servicee, de lá, consumir seu conteudo - ou 
  // seja - a lista de produtos. Para isso, sera nescessario criar um 
  acessandoListaProdutos(){
   this.cestaProdutos = this.objService.gerarListaProdutos()
  }

}

