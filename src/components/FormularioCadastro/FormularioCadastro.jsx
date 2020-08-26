import React, { Component } from 'react';
import './estilo.css';
import { Nota } from '../../db/Notas';

class FormularioCadastro extends Component {

  constructor(props) {
    super(props)
    this._handler = this._handler.bind(this)
    this.titlo = "";
    this.msg = "";
    this.categoria = "Sem categoria";
    this.state = {
      categorias: []
    }
  }
  componentDidMount() {
    this.props.categorias.addHandler(this._handler);
  }
  componentWillUnmount() {
    this.props.categorias.removeHandler(this._handler);
  }
  _handler(categorias) {
    this.setState({ ...this.state, categorias });
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
    this.props.criarNota(new Nota(this.titulo, this.msg, this.categoria));
    document.querySelector("#title").value = "";
    document.querySelector("#msg").value = "";
  }
  _handleCategoriaChanged(event) {
    event.stopPropagation();
    this.categoria = event.target.value;
  }

  render() {
    return (
      <form className="form-cadastro"
        onSubmit={this._handleSubmit.bind(this)}>
        <select className="form-cadastro_input" name="categoria" id="" onChange={this._handleCategoriaChanged.bind(this)}>
          <option defaultChecked={true}>Sem categoria</option>
          {
            this.state.categorias.map((categoria, index) => {
              return (
                <option key={index} value={categoria}>{categoria}</option>
              )
            })
          }
        </select>
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