import { catalogoProdutos } from "./dados.js";
import { carregaCard } from "./funcoes.js";
import { pegarCodProduto } from "./funcoes.js";
import { pegarPaginaProdutos } from "./funcoes.js"
pegarPaginaProdutos()
let listaCamisas = catalogoProdutos.filter(produto => produto.tipo === "CortaVento")
let gridCamisas = document.querySelector("#camisa_product_grid")

carregaCard(listaCamisas,gridCamisas)
pegarCodProduto()

