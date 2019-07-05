import ClienteEdit   from './edit'
import { connect } from 'react-redux'
import {
  editPessoaFisica,
  fetchPessoaFisica,
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
    onEdit: (cliente, history) => {
      dispatch(editPessoaFisica(cliente, history))
    },
    onFetch: (id, pessoaFisica) => {
      dispatch(fetchPessoaFisica(id))
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ClienteEdit);
