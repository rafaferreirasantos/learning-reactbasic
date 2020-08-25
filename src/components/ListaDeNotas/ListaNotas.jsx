import React, { Component } from "react";
import CardNota from '../CardNota/CardNota';
import './estilo.css';
class ListaNotas extends Component {
  render() {
    return (
      <ul className="lista-notas">
        {
          this.props.notas.map((nota, index) => {
            return (
              <li key={index} className="lista-notas_item">
                <CardNota nota={nota} />
              </li>
            );
          })
        }
      </ul>
    );
  }
}
export default ListaNotas;