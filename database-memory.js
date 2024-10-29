import {randomUUID} from "node:crypto";

export class DatabaseMemory{
  #tipos = new Map();

  list (){
    return Array.from(this.#tipos.values());
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