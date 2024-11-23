import { ProdutoRepository } from "../controllers/product.controller";
import type { Produto, ProdutoCreate } from "../interfaces/product.interface";

class ProdutoUseCase {
  private produto: ProdutoRepository;

  constructor() {
    this.produto = new ProdutoRepository();
  }

  async create(data: ProdutoCreate): Promise<Produto> {
    const existing = await this.produto.findByName(data.nome_produto);
    if (existing) {
      throw new Error("Produto já existe");
    }
    const result = await this.produto.create(data);
    return result;
  }

  async list(): Promise<Produto[]> {
    return await this.produto.findAll();
  }

  async update(
    id_produto: string,
    data: Partial<ProdutoCreate>
  ): Promise<Produto> {
    const existing = await this.produto.findById(id_produto);
    if (!existing) {
      throw new Error("Produto não encontrado");
    }
    const result = await this.produto.update(id_produto, data);
    return result;
  }

  async delete(id_produto: string): Promise<void> {
    const existing = await this.produto.findById(id_produto);
    if (!existing) {
      throw new Error("Produto não encontrado");
    }
    await this.produto.delete(id_produto);
  }
}

export { ProdutoUseCase };
