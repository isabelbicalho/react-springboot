import React, { Component } from 'react';
import { Button, ButtonGroup, Table } from 'reactstrap';
import { Link } from 'react-router-dom';

class ClientesList extends Component {

  constructor(props) {
    super(props);
    debugger
    this.props.onFetchPessoasFisicas();
    this.props.onFetchPessoasJuridicas();
    // this.state = {clientes: props.clientes};
  }

  render() {
    // const { clientes } = this.state;

    const clienteList1 = this.props.pessoasFisicas.map(cliente => {
      return <tr key={cliente.id}>
        <td style={{whiteSpace: 'nowrap'}}>{cliente.name}</td>
        <td>{cliente.cpf}</td>
        <td>Pessoa Física</td>
        <td>{cliente.phones}</td>
        <td>
          <ButtonGroup>
            <Button size="sm" color="primary" tag={Link} to={"/clientes/pessoafisica/" + cliente.id}>Edit</Button>
            <Button size="sm" color="danger" onClick={() => this.onDeletePessoaFisica(cliente.id)}>Delete</Button>
          </ButtonGroup>
        </td>
      </tr>
    });

    const clienteList2 = this.props.pessoasJuridicas.map(cliente => {
      return <tr key={cliente.id}>
        <td style={{whiteSpace: 'nowrap'}}>{cliente.companyName}</td>
        <td>{cliente.cnpj}</td>
        <td>Pessoa Jurídica</td>
        <td>{cliente.phones}</td>
        <td>
          <ButtonGroup>
            <Button size="sm" color="primary" tag={Link} to={"/clientes/pessoajuridica/" + cliente.id}>Edit</Button>
            <Button size="sm" color="danger" onClick={() => this.onDeletePessoaJuridica(cliente.id)}>Delete</Button>
          </ButtonGroup>
        </td>
      </tr>
    });

    return (
      <div>
        <div className="float-right">
          <Button color="danger" tag={Link} to="/clientes/pessoajuridica/new">Adicionar Pessoa Jurídica</Button>
        </div>
        <div className="float-right">
          <Button color="success" tag={Link} to="/clientes/pessoafisica/new">Adicionar Pessoa Física</Button>
        </div>
        <h3>Clientes</h3>
        <Table className="mt-4">
          <thead>
          <tr>
            <th width="20%">Nome/Empresa</th>
            <th width="20%">CPF/CNPJ</th>
            <th width="20%">Tipo</th>
            <th>Telefones</th>
            <th width="10%">Ações</th>
          </tr>
          </thead>
          <tbody>
          {clienteList1}
          {clienteList2}
          </tbody>
        </Table>
      </div>
    );
  }
}

export default ClientesList;
