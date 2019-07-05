import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Row, Button, Container, Form, FormGroup, Input, Label } from 'reactstrap';
import Select from 'react-select';
import TagsInput from 'react-tagsinput';

class ClienteEdit extends Component {

  constructor(props) {
    super(props)
    this.state = {
      item: {
        name: '',
        cpfCnpj: '',
        email: '',
        telefones: [],
        stage: '',
        postalCode: '',
        pessoaJuridica: false
      }
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    debugger
    const target = event.target;
    const value = target.value;
    const name = target.name;
    let item = {...this.state.item};
    item[name] = value;
    this.setState({item});
  }

  handleSubmit(event) {
    event.preventDefault();
    const {item} = this.state;
    this.props.createCliente(item, this.props.history)
  }

  render() {
    const {item} = this.state;
    const title = <h2>Adicionar cliente</h2>;

    return <div>
      <Container>
        {title}
        <Form onSubmit={this.handleSubmit}>
          <FormGroup>
            <Label for="name">Pessoa Jurídica</Label>
            <Input type="checkbox" name="pessoaJuridica" id="pessoaJuridica" value={item.pessoaJuridica || false}
                   onChange={this.handleChange} autoComplete="pessoaJuridica"/>
          </FormGroup>
          <FormGroup>
            <Label for="cpfCnpj">{item.pessoaJuridica ? 'CNPJ' : 'CPF'}</Label>
            <Input type="text" name="cpfCnpj" id="cpfCnpj" value={item.cpfCnpj || ''}
                   onChange={this.handleChange} autoComplete="cpfCnpj"/>
          </FormGroup>
          <FormGroup>
            <Label for="email">Email</Label>
            <Input type="text" name="email" id="email" value={item.email || ''}
                   onChange={this.handleChange} autoComplete="email"/>
          </FormGroup>
          <div className="row">
              <FormGroup className="col-md-4 mb-3">
              <Label for="postalCode">PostalCode</Label>
              <Input type="text" name="postalCode" id="postalCode" value={item.postalCode || ''}
                     onChange={this.handleChange} autoComplete="postalCode"/>
            </FormGroup>
            <FormGroup className="col-md-5 mb-3">
              <Label for="country">Stage</Label>
              <Select
                id="stage"
                name="stage"
                className="primary"
                placeholder="Stage"
                value={item.stage}
                options={[{value: 'Active', label: 'Active'}, {value: 'Inactive', label: 'Inactive'}]}
                onChange={(value) => this.setState({ item: {...item, stage: value}})}
              />
            </FormGroup>
            <FormGroup className="col-md-3 mb-3">
              <Label for="country">Telefones</Label>
              <TagsInput
                id="telefones"
                name="telefones"
                value={item.telefones}
                onChange={(value) => this.setState({ item: {...item, telefones: value }})}
                tagProps={{className: 'react-tagsinput-tag info' }}
              />
            </FormGroup>
          </div>
          <FormGroup>
            <Button color="primary" type="submit">Save</Button>{' '}
            <Button color="secondary" tag={Link} to="/groups">Cancel</Button>
          </FormGroup>
        </Form>
      </Container>
    </div>
  }
}

export default withRouter(ClienteEdit);
