# Sistema de Controle de Vendas – Loja de Bombons

Este projeto foi desenvolvido como parte da atividade de **Modelagem Orientada a Objetos (POO)**.  
O objetivo é criar um sistema simples para controlar produtos e vendas de uma loja de bombons artesanais.

---

## Cenário

Uma pequena loja de bombons precisa de um sistema para:

- Cadastrar produtos (nome e preço)
- Registrar vendas
- Adicionar produtos a uma venda com quantidade
- Calcular o total da venda
- Listar produtos e vendas

O sistema **não possui cadastro de clientes nem autenticação**.

---

## Modelagem Orientada a Objetos

O sistema foi modelado com as seguintes classes principais:

- **Produto** → representa um bombom (nome, preço, id)
- **ItemVenda** → representa um produto + quantidade
- **Venda** → contém vários itens e calcula o total
- **Loja** → gerencia produtos e vendas
- **IProduto** → interface base de produto

O diagrama de classes está em src/uml no arquivo:

`diagram.puml` (PlantUML)

---

## Estrutura do Projeto

```txt
src/
 ├── class/
 │    ├── loja.ts
 │    ├── produto.ts
 │    ├── venda.ts
 │    └── itemVenda.ts
 │
 ├── interface/
 │    └── iProduto.ts
 ├── uml
 │    └── diagram.puml
 ├── teste.ts
 └── index.html

README.md
