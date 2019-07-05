import ClienteEdit   from './edit'
import { connect } from 'react-redux'
import {
  createCliente,
  editCliente,
  fetchCliente,
} from 'js/actions/Clientes'

const mapStateToProps = (state) => {
  return {
    cliente:    state.clientes.item,
    hasError:   state.clientes.hasError,
    message:    state.clientes.message
  }
}


const mapDispatchToProps = (dispatch) => {
  return {
    onCreate: (cliente, pessoaFisica, history) => {
      dispatch(createCliente(cliente, pessoaFisica, history))
    },
    onEdit: (cliente, pessoaFisica, history) => {
      dispatch(editCliente(cliente, pessoaFisica, history))
    },
    onFetch: (id, pessoaFisica) => {
      dispatch(fetchCliente(id, pessoaFisica))
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ClienteEdit);
