import React, { Component } from 'react';
import { Button, ButtonGroup, Table } from 'reactstrap';
import { Link } from 'react-router-dom';

class ClientesList extends Component {

  constructor(props) {
    super(props);
    this.state = {clientes: props.clientes};
  }

  render() {
    const { clientes } = this.state;

    const clienteList = clientes.map(cliente => {
      const address = `${cliente.address || ''} ${cliente.city || ''} ${cliente.stateOrProvince || ''}`;
      return <tr key={cliente.id}>
        <td style={{whiteSpace: 'nowrap'}}>{cliente.name}</td>
        <td>{address}</td>
        <td>{cliente.events.map(event => {
          return <div key={event.id}>{new Intl.DateTimeFormat('en-US', {
            year: 'numeric',
            month: 'long',
            day: '2-digit'
          }).format(new Date(event.date))}: {event.title}</div>
        })}</td>
        <td>
          <ButtonGroup>
            <Button size="sm" color="primary" tag={Link} to={"/clientes/" + cliente.id}>Edit</Button>
            <Button size="sm" color="danger" onClick={() => this.onDelete(cliente.id)}>Delete</Button>
          </ButtonGroup>
        </td>
      </tr>
    });

    return (
      <div>
        <div className="float-right">
          <Button color="success" tag={Link} to="/clientes/pessoafisica/new">Adicionar Pessoa Física</Button>
        </div>
        <div className="float-right">
          <Button color="danger" tag={Link} to="/clientes/pessoajuridica/new">Adicionar Pessoa Jurídica</Button>
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
          {clienteList}
          </tbody>
        </Table>
      </div>
    );
  }
}

export default ClientesList;
