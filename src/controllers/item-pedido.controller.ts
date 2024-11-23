import prisma from "../infra/db";
import type { ItemPedido, ItemPedidoController, ItemPedidoCreate } from "../interfaces/item-pedido.interface";

class ItemPedidoRepository implements ItemPedidoController {
  async add(data: ItemPedidoCreate): Promise<ItemPedido> {
    const result = await prisma.itemPedido.create({
      data: {
        id_pedido: data.id_pedido,
        id_produto: data.id_produto,
        quantidade: data.quantidade,
        observacoes: data.observacoes || null,
      },
    });
    return result;
  }

  async listByPedido(id_pedido: string): Promise<ItemPedido[]> {
    const result = await prisma.itemPedido.findMany({
      where: { id_pedido },
    });
    return result;
  }

  async delete(id_item_pedido: string): Promise<void> {
    await prisma.itemPedido.delete({
      where: { id_item_pedido },
    });
  }
}

export { ItemPedidoRepository };
