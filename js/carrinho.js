import { pegarPaginaProdutos } from "./funcoes.js"
pegarPaginaProdutos()
let sacolaCompras = JSON.parse(localStorage.getItem("sacolaCompras"))


let pedidos = JSON.parse(localStorage.getItem("pedidos"))
if (pedidos == null){
    pedidos = []
}

let cartList = document.querySelector('div#cart_list')

sacolaCompras.forEach(item => {
    let html = `
 
    <div class="iten">
      <img src="${item.imagemProduto}" alt="">
      <div id="textIten">
        <p>${item.produto}</p>
        <p>${item.preco}</p>
        <p>Quantidade: ${item.quantidade}</p>
        <i class="bi bi-trash3"></i>
      </div>
    </div>

`
cartList.innerHTML += html
    
});

let botaoDel = document.querySelectorAll(".bi.bi-trash3")
botaoDel.forEach(botao => botao.addEventListener('click', (event) => {
    let item = event.target.parentElement.parentElement
    console.log(item)
    cartList.removeChild(item)
    console.log(item.id)
    let index = sacolaCompras.findIndex( i => i.codigoProduto == item.id)
    sacolaCompras.splice(index,1)
    console.log(sacolaCompras)
    localStorage.setItem('sacolaCompras',JSON.stringify(sacolaCompras))
}
    
))

let finalizar = document.querySelector("#finalizar")
finalizar.addEventListener('click', ()=> {
    
    let endereco = {
        nome: document.querySelector("input#nome").value,
        telefone: document.querySelector("input#telefone").value,
        logradouro: document.querySelector("input#logradouro").value,
        bairro: document.querySelector("input#bairro").value,
        cidade: document.querySelector('input#cidade').value,
        estado: document.querySelector('input#estado').value
    }

   let codPedido = pedidos.length
    if(pedidos == null || pedidos == 0){
        codPedido = 1
    }

    let pedido = {
        itens: sacolaCompras, 
        endereco: endereco, 
        id: codPedido
    }// crio um objeto que guarda uma lista de produtos e o endereco do comprador
    pedidos.push(pedido) // coloco o pedido na lista de pedidos
    localStorage.setItem('pedidos',JSON.stringify(pedidos))
    alert("Pedido Adicionado com Sucesso!")
   


})

