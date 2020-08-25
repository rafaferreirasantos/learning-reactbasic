import React, { Component } from 'react';
import ListaNotas from './components/ListaDeNotas';
import FormularioCadastro from './components/FormularioCadastro'
import "./assets/App.css";
class App extends Component {

  constructor() {
    super();
    this.state = {
      notas: [],
    };
  }

  criarNota(titulo, msg) {
    console.log(`Uma nova nota foi criada. Título: ${titulo}, mensage: ${msg}`);
    console.log("Rafael");
    this.setState({
      notas: [...this.state.notas, { titulo, msg }]
    });
  }

  render() {
    console.log("Renderizando...");
    return (
      <section className="conteudo">
        <FormularioCadastro criarNota={this.criarNota.bind(this)} />
        <ListaNotas notas={this.state.notas} />
      </section>
    );
  }
}
export default App;
