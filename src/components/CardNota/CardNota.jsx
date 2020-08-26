import React, { Component } from 'react';
import './estilo.css';
import deleteSVG from '../../assets/img/delete.svg'
class CardNota extends Component {
  delete() {
    const index = this.props.index;
    this.props.deleteAction(index);
  }
  componentWillUnmount() {
    console.log("Destruindo card de nota");
  }
  render() {
    return (
      <section className="card-nota">
        <header className="card-nota_cabecalho">
          <h3 className="card-nota_titulo">{this.props.nota.titulo}</h3>
          <img src={deleteSVG} alt="delete" onClick={this.delete.bind(this)} />
          <h4>{this.props.nota.categoria}</h4>
        </header>
        <p className="card-nota_texto">{this.props.nota.texto}</p>
      </section>
    );
  }
}
export default CardNota;