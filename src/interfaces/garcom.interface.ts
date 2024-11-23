export interface Garcom {
  id_garcom: string;
  nome: string;
  telefone: string;
  id_user: string;
}

export interface GarcomCreate {
  nome: string;
  telefone: string;
  id_user: string;
}

export interface GarcomUpdate {
  id_garcom: string;
  nome?: string;
  telefone?: string;
  id_user?: string;
}
