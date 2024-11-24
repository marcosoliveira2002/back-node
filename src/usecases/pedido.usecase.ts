import { PedidoRepository } from "../controllers/pedido.controller";
import type { Pedido, PedidoCreate } from "../interfaces/pedido.interface";

class PedidoUseCase {
  private pedido: PedidoRepository;

  constructor() {
    this.pedido = new PedidoRepository();
  }

  async create(data: PedidoCreate): Promise<Pedido> {
    const result = await this.pedido.create(data);
    return result;
  }
  async getPedidoComItens(id_pedido: string): Promise<any> {
    return await this.pedido.findPedidoWithItens(id_pedido);
  }
  async close(id: string): Promise<void> {
    await this.pedido.close(id);
  }

  async list(): Promise<Pedido[]> {
    const result = await this.pedido.list();
    return result;
  }

}

export { PedidoUseCase };
