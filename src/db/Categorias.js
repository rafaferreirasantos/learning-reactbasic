export default class Categorias {
  constructor() {
    this.categorias = [];
    this._handlers = [];
  }
  adicionarCategoria(categoria) {
    this.categorias.push(categoria);
    // Aciona handlers
    this.raiseEventHandler();
  }
  raiseEventHandler() {
    this._handlers.forEach(handler => handler(this.categorias));
  }
  addHandler(handler) {
    this._handlers.push(handler);
  }
  removeHandler(handler) {
    this._handlers = this._handlers.filter(f => f !== handler);
  }
}