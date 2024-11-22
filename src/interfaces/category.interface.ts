export interface CategoriaProduto {
  id_categoria_produto: string;
  categoria: string;
}

export interface CategoriaProdutoCreate {
  categoria: string;
}

export interface CategoriaProdutoController {
  create(data: CategoriaProdutoCreate): Promise<CategoriaProduto>;
}
