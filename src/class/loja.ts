import { Produto } from "./produto";
import { Venda } from "./venda";
import { ItemVenda } from "./itemVenda";

export class Loja {
  private produtos: Produto[] = [];
  private vendas: Venda[] = [];

  cadastrarProduto(produto: Produto): void {
    this.produtos.push(produto);
  }

  listarProdutos(): Produto[] {
    return this.produtos;
  }

  criarVenda(): Venda {
    const venda = new Venda();
    this.vendas.push(venda);
    return venda;
  }

  adicionarItemNaVenda(venda: Venda, produto: Produto, quantidade: number): void {
    const item = new ItemVenda(produto, quantidade);
    venda.adicionarItem(item);
  }

  listarVendas(): Venda[] {
    return this.vendas;
  }
}
