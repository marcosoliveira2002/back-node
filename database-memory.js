import {randomUUID} from "node:crypto";

export class DatabaseMemory{
  #tipos = new Map();

  list (search){
    return Array.from(this.#tipos.entries())
    .map((arrayTipos) => {
      const id = arrayTipos[0];
      const dados = arrayTipos[1];
      return {
        id,
        ...dados
      }
    })
    .filter(tipo =>{
      if (search) {
        return tipo.nome_tipo_produto.includes(search)
      }
      return true
    })
  }
  create (tipo){
    const tipoId = randomUUID();

    this.#tipos.set(tipoId, tipo)
  }

  update(id, tipo){
    this.#tipos.set(id, tipo)
  }
  delete(id){
    this.#tipos.delete(id)
  }
}