export interface Pedido {
  id_pedido: string;
  id_mesa: string;
  id_garcom: string;
  data_hora: Date;
  status: "P" | "C";
}

export interface PedidoCreate {
  id_mesa: string;
  id_garcom: string;
}

export interface PedidoController {
  create(data: PedidoCreate): Promise<Pedido>;
  close(id: string): Promise<void>;
}
