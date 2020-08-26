import React, { Component } from 'react';
import './estilo.css';
class ListaCategorias extends Component {
  constructor() {
    super();
    this.state = {
      categorias: []
    }
  }
  componentDidMount() {
    this.props.categorias.addHandler(this._handler.bind(this));
  }
  _handler(categorias) {
    this.setState({ ...this.state, categorias });
  }
  _keyPressHandler(event) {
    if (event.key === "Enter") {
      this.props.addCategoria(event.target.value);
      document.querySelector("#novaCategoria").value = "";
    }
  }
  render() {
    return (
      <section className="lista-categorias">
        <ul className="lista-categorias_lista">
          {
            this.state.categorias.map((categoria, index) => {
              return (
                <li className="lista-categorias_item" key={index}>{categoria}</li>
              );
            })
          }
        </ul>
        <input type="text" name="" id="novaCategoria" placeholder="Adicionar categoria" onKeyPress={this._keyPressHandler.bind(this)} />
      </section>
    );
  }
}

export default ListaCategorias;