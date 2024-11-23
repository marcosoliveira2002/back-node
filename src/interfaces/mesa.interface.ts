export interface Mesa {
  id_mesa: string;
  numero_mesa: number;
}

export interface MesaCreate {
  numero_mesa: number;
}

export interface MesaController {
  create(data: MesaCreate): Promise<Mesa>;
  delete(id: string): Promise<void>;
  list(): Promise<Mesa[]>;
}
