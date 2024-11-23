export interface Produto {
  id_produto: string;
  nome_produto: string;
  preco: number;
  id_categoria_produto: string;
}

export interface ProdutoCreate {
  nome_produto: string;
  preco: number;
  id_categoria_produto: string;
}

export interface ProdutoController {
  create(data: ProdutoCreate): Promise<Produto>;
  findByName(nome_produto: string): Promise<Produto | null>;
}
