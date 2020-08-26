export default class Notas {
  constructor() {
    this.notas = [];
    this._handlers = [];
  }
  adicionarNota(nota) {
    if (!nota instanceof Nota) {
      throw new Error("Nota inválida");
    }
    this.notas.push(nota);
    this.raiseEventHandler();
  }
  deletarNota(index) {
    this.notas.splice(index, 1);
    this.raiseEventHandler();
  }
  raiseEventHandler() {
    this._handlers.forEach(handler => handler(this.notas));
  }
  addHandler(handler) {
    this._handlers.push(handler);
  }
  removeHandler(handler) {
    delete this.handler[handler];
  }
}
export class Nota {
  constructor(titulo, texto, categoria) {
    this.titulo = titulo;
    this.texto = texto;
    this.categoria = categoria;
  }
}