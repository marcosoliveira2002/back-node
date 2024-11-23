import prisma from "../infra/db";
import type { Pedido, PedidoController, PedidoCreate } from "../interfaces/pedido.interface";

class PedidoRepository implements PedidoController {
  async create(data: PedidoCreate): Promise<Pedido> {
    const result = await prisma.pedido.create({
      data: {
        id_mesa: data.id_mesa,
        id_garcom: data.id_garcom,
        data_hora: new Date(),
        status: "P",  // Literal type "P"
      },
    });
    return result;
  }

  async close(id: string): Promise<void> {
    await prisma.pedido.update({
      where: { id_pedido: id },
      data: { status: "C" },
    });
  }

  async findPedidoWithItens(id_pedido: string): Promise<any> {
    const pedido = await prisma.pedido.findUnique({
      where: { id_pedido },
      include: {
        itens: {
          include: {
            produto: true,
          },
        },
      },
    });

    if (!pedido) {
      throw new Error("Pedido não encontrado");
    }

    const valorTotal = pedido.itens.reduce((acc, item) => {
      return acc + item.quantidade * (item.produto.preco || 0);
    }, 0);

    return {
      ...pedido,
      valorTotal,
    };
  }
}


export { PedidoRepository };
