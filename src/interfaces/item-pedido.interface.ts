export interface ItemPedido {
  id_item_pedido: string;
  id_pedido: string;
  id_produto: string;
  quantidade: number;
  observacoes: string | null;
}

export interface ItemPedidoCreate {
  id_pedido: string;
  id_produto: string;
  quantidade: number;
  observacoes?: string;
}

export interface ItemPedidoController {
  add(data: ItemPedidoCreate): Promise<ItemPedido>;
  listByPedido(id_pedido: string): Promise<ItemPedido[]>;
  delete(id_item_pedido: string): Promise<void>;
}
