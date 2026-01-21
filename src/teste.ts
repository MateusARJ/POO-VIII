import { Loja } from "./class/loja";
import { Produto } from "./class/produto";

const loja = new Loja();

const p1 = new Produto(1, "Bombom de Morango", 2.5);
const p2 = new Produto(2, "Bombom de Coco", 3);

loja.cadastrarProduto(p1);
loja.cadastrarProduto(p2);

const venda = loja.criarVenda();
loja.adicionarItemNaVenda(venda, p1, 3);
loja.adicionarItemNaVenda(venda, p2, 2);

console.log("Total da venda:", venda.calcularTotal());
console.log("Itens da venda:", venda.listarItens());