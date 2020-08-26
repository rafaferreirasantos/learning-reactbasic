import React, { Component } from 'react';
import ListaNotas from './components/ListaDeNotas';
import FormularioCadastro from './components/FormularioCadastro';
import ListaCategorias from './components/ListaDeCategorias';
import "./assets/App.css";
import Categorias from './db/Categorias';
import Notas from './db/Notas';
class App extends Component {
  constructor() {
    super();
    this.categorias = new Categorias();
    this.notas = new Notas();
  }
  render() {
    return (
      <section className="conteudo">
        <FormularioCadastro criarNota={this.notas.adicionarNota.bind(this.notas)} categorias={this.categorias} />
        <main className="conteudo-principal">
          <ListaCategorias categorias={this.categorias} addCategoria={this.categorias.adicionarCategoria.bind(this.categorias)} />
          <ListaNotas notas={this.notas} deleteAction={this.notas.deletarNota.bind(this.notas)} />
        </main>
      </section>
    );
  }
}
export default App;
