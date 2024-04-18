export function carregaCard(listaProdutos, gridProduto) {
  listaProdutos.forEach(produto => {
    const html = `
 
    <div class="content" id="${produto.codigoProduto}">
      <a href="pgProduto.html" id="${produto.codigoProduto}">
        <img src="${produto.imagemProduto}" alt="" id="${produto.codigoProduto}">
        <h3>${produto.produto}</h3>
        <h4>${produto.preco}</h4>
        <h5>${produto.parcela}</h5>
      </a>
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="black" class="bi bi-bag" viewBox="0 0 16 16">
        <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z"/>
      </svg>
    </div>`;
    gridProduto.innerHTML += html;
  });
}

export function pegarCodProduto() {
  let itens = document.querySelectorAll("div.content");
  console.log(itens);
  itens.forEach(item => item.addEventListener('click', (evento) => {
    let prodID = evento.currentTarget.id;
    localStorage.setItem('prodId', prodID);
  }));
}

export function pegarPaginaProdutos() {
  let pg = document.querySelectorAll(".dropOpcao");
  console.log(pg);
    pg.forEach(function(div) {
      div.addEventListener('click', function() {
          let pagID = this.id;
          localStorage.setItem('pagID', pagID);
      });
  });
}

/*let pg = document.querySelectorAll(".dropOpcao");
console.log(pg);
  pg.forEach(function(div) {
    div.addEventListener('click', function() {
        let prodID = this.id;
        localStorage.setItem('prodId', prodID);
    });
});
*/

export function findProduto(listaProdutos, id) {
  let produto = listaProdutos.find(produto => produto.codigoProduto == id);
  return produto;
}

export function carregaProduto(produto, selecaoProduto) {
  let html = `<div class="containers">
    <img src="${produto.imagemProduto}" alt="">
    <img src="${produto.imagemProduto2}" alt="">
    <img src="${produto.imagemProduto3}" alt="">
    <img src="${produto.imagemProduto4}" alt="">
  </div>
  <img id="mainCamisa" src="${produto.imagemProduto}" alt="" width="600px" height="600px">
  <div class="textProdutos">
    <h2>${produto.produto}</h2>
    <h3>${produto.preco}</h3>
    <p>As camisas da Jersey Club são de tecido 100% Poliéster, ela é do modelo torcedor, ou seja, diferente do modelo jogador ela foi pensada para o uso do dia a dia, sendo mais reforçada e mais pesada.</p>

    <div class="personalizacao">
      <div class="submits">
        <label for="tamanho">Tamanho</label>
        <select id="tamanho" name="estado">
          <option value="xg">XG</option>
          <option value="gg">GG</option>
          <option value="g">G</option>
          <option value="m">M</option>
          <option value="p">P</option>
        </select>
      </div>
      <div class="submits">
        <label for="quantidade">Quantidade</label>
        <input type='number' id='quantidade' name='quantidade'>
      </div>
    </div>

    <div class="botao">
      <button type="submit" id="botao_comprar">ADICIONAR AO CARRINHO</button>
    </div>
  </div>`;

  selecaoProduto.innerHTML = html;
}
