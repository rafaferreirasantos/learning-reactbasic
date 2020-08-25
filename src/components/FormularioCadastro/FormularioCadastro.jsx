import React, { Component } from 'react';
import './estilo.css';

class FormularioCadastro extends Component {

  constructor(props) {
    super(props)
    this.titlo = "";
    this.msg = "";
  }

  _handleTitleChanged(event) {
    event.stopPropagation();
    this.titulo = event.target.value;
  }
  _handleMsgChanged(event) {
    event.stopPropagation();
    this.msg = event.target.value;
  }
  _handleSubmit(event) {
    event.preventDefault();
    event.stopPropagation();
    //Criar nota
    this.props.criarNota(this.titulo, this.msg);
    document.querySelector("#title").value = "";
    document.querySelector("#msg").value = "";
  }

  render() {
    return (
      <form className="form-cadastro"
        onSubmit={this._handleSubmit.bind(this)}>
        <input
          type="text"
          name=""
          id="title"
          placeholder="Título"
          className="form-cadastro_input"
          onChange={this._handleTitleChanged.bind(this)} />
        <textarea
          rows={15}
          name=""
          id="msg"
          cols="30"
          placeholder="Escreva sua nota"
          className="form-cadastro_input"
          onChange={this._handleMsgChanged.bind(this)} />
        <button
          className="form-cadastro_input form-cadastro_submit">
          Criar nota</button>
      </form>
    );
  }
}
export default FormularioCadastro;