import { catalogoProdutos } from "./dados.js";
import { findProduto,carregaProduto } from "./funcoes.js";
import { pegarPaginaProdutos } from "./funcoes.js"
pegarPaginaProdutos()
let id = localStorage.getItem('prodId')
let listaCompras = JSON.parse(localStorage.getItem('sacolaCompras'))

if (listaCompras == null || listaCompras.length == 0){
    listaCompras = []
}

let produto = findProduto(catalogoProdutos,id)
let selecaoProduto = document.querySelector("#product_container") 

carregaProduto(produto,selecaoProduto) 

let botaoComprar = document.querySelector("#botao_comprar")
console.log()

botaoComprar.addEventListener('click',()=>{
    let quantidade = parseInt(document.querySelector("#quantidade").value)
    produto.quantidade = quantidade
    alert("O produto foi adicionado")
   listaCompras.push(produto)
   localStorage.setItem('sacolaCompras',JSON.stringify(listaCompras))
   console.log(listaCompras)
})

