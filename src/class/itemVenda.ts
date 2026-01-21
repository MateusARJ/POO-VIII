import { Produto } from "./produto";

export class ItemVenda {
  constructor(
    public produto: Produto,
    public quantidade: number
  ) {}

  getSubtotal(): number {
    return this.produto.preco * this.quantidade;
  }
}
