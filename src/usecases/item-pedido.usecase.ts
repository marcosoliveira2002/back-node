import { ItemPedidoRepository } from "../controllers/item-pedido.controller";
import type { ItemPedido, ItemPedidoCreate } from "../interfaces/item-pedido.interface";

class ItemPedidoUseCase {
  private itemPedido: ItemPedidoRepository;

  constructor() {
    this.itemPedido = new ItemPedidoRepository();
  }

  async add(data: ItemPedidoCreate): Promise<ItemPedido> {
    const result = await this.itemPedido.add(data);
    return result;
  }

  async listByPedido(id_pedido: string): Promise<ItemPedido[]> {
    const result = await this.itemPedido.listByPedido(id_pedido);
    return result;
  }

  async delete(id_item_pedido: string): Promise<void> {
    await this.itemPedido.delete(id_item_pedido);
  }
}

export { ItemPedidoUseCase };
