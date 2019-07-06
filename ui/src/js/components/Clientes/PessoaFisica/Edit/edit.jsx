import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Button, Container, Form, FormGroup, Input, Label } from 'reactstrap';
import Select from 'react-select';
import TagsInput from 'react-tagsinput';
import { isCPF } from 'brazilian-values';

class ClienteEdit extends Component {

  constructor(props) {
    super(props)
    this.state = {
      item: {
        id: this.props.match.params.id,
        name: '',
        cpf: '',
        email: '',
        phones: [],
        stage: '',
        postalCode: '',
      }
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillMount() {
    this.props.onFetch(this.props.match.params.id)
  }

  componentWillReceiveProps(props) {
    if (props.cliente) {
      this.setState({item: props.cliente})
    }
  }

  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    let item = {...this.state.item};
    item[name] = value;
    this.setState({item});
  }

  handleSubmit(event) {
    event.preventDefault();
    if (this.validateRequired()) {
      const {item} = this.state;
      this.props.onEdit(item, this.props.history)
    }
  }

  validateRequired() {
    let isValid = true;
    if (!this.state.item.name){
      isValid = false;
    }
    if (!this.state.item.cpf || !isCPF(''+this.state.item.cpf)) {
      isValid = false;
    }
    if (!this.state.stage) {
    }
    if (!this.state.item.phones) {
      isValid = false;
    }
    return isValid;
  }

  render() {
    const {item} = this.state;
    const title = <h2>Editar Pessoa Física</h2>;
    return <div>
      <Container>
        {title}
        <Form onSubmit={this.handleSubmit}>
          <FormGroup>
            <Label for="name">Nome *</Label>
            <Input type="text" name="name" id="name" value={item.name || ''}
                   onChange={this.handleChange} autoComplete="name"/>
          </FormGroup>
          <FormGroup>
            <Label for="cpf">CPF *</Label>
            <Input type="number" name="cpf" id="cpf" value={item.cpf || ''}
                   onChange={this.handleChange} autoComplete="cpf"/>
          </FormGroup>
          <FormGroup>
            <Label for="email">Email *</Label>
            <Input type="email" name="email" id="email" value={item.email || ''}
                   onChange={this.handleChange} autoComplete="email"/>
          </FormGroup>
          <div className="row">
              <FormGroup className="col-md-4 mb-3">
              <Label for="postalCode">PostalCode</Label>
              <Input type="number" name="postalCode" id="postalCode" value={item.postalCode || ''}
                     onChange={this.handleChange} autoComplete="postalCode"/>
            </FormGroup>
            <FormGroup className="col-md-5 mb-3">
              <Label for="country">Stage *</Label>
              <Select
                id="stage"
                name="stage"
                className="primary"
                placeholder="Stage"
                value={{value: item.stage, label: item.stage}}
                options={[{value: 'active', label: 'active'}, {value: 'inactive', label: 'inactive'}]}
                onChange={(value) => this.setState({ item: {...item, stage: value.value}})}
              />
            </FormGroup>
            <form>
              <Label>Telefones *</Label>
              <TagsInput
                id="phones"
                name="phones"
                value={item.phones}
                onChange={(value) => this.setState({ item: {...item, phones: value }})}
                tagProps={{className: 'react-tagsinput-tag info' }}
              />
            </form>
          </div>
          <FormGroup>
            <Button color="primary" type="submit">Save</Button>{' '}
            <Button color="secondary" tag={Link} to="/clientes">Cancel</Button>
          </FormGroup>
        </Form>
      </Container>
    </div>
  }
}

export default withRouter(ClienteEdit);
