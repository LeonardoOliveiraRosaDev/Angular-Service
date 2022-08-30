// criar o model domain para tratar os dados que serão operados pelo service
export class Produto{
    /*
        1º Parte criar as propriedades e inicializar no construtor para o
        acesso e uso do service
    */
   idProduto: number
   nomeProduto: string
   precoProduto: number

   /*
    2º Parte 
        - criar o construtor da classe
        - referenciar / inicializar cada uma das propriedades indicadas na classe
        - desssa formaas propriedades serão disponibilizadas para o service em 
        qualquer outro "pedaço" do projeto
   */

    constructor(idProduto: number, nomeProduto: string, precoProduto: number){
        // inicizalizar as propriedades / atributos da classe
        this.idProduto = idProduto
        this.nomeProduto = nomeProduto
        this.precoProduto = precoProduto
    }
}