import React, { Component } from "react";
import CardNota from '../CardNota/CardNota';
import './estilo.css';
class ListaNotas extends Component {
  constructor() {
    super();
    this.state = {
      notas: []
    }
  }
  componentDidMount() {
    this.props.notas.addHandler(this._handler.bind(this));
  }
  _handler(notas) {
    this.setState({ ...this.state, notas });
  }
  render() {
    return (
      <ul className="lista-notas">
        {
          this.state.notas.map((nota, index) => {
            return (
              <li key={index} className="lista-notas_item">
                <CardNota nota={nota} deleteAction={this.props.deleteAction} index={index} />
              </li>
            );
          })
        }
      </ul>
    );
  }
}
export default ListaNotas;