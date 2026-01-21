import { ItemVenda } from "./itemVenda";

export class Venda {
  private itens: ItemVenda[] = [];
  private static contador = 1;
  public id: number;

  constructor() {
    this.id = Venda.contador++;
  }

  adicionarItem(item: ItemVenda): void {
    this.itens.push(item);
  }

  listarItens(): ItemVenda[] {
    return this.itens;
  }

  calcularTotal(): number {
    return this.itens.reduce((total, item) => total + item.getSubtotal(), 0);
  }
}
