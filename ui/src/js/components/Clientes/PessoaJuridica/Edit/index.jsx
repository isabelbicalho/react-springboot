import ClienteEdit   from './edit'
import { connect } from 'react-redux'
import {
  editPessoaJuridica,
  fetchPessoaJuridica,
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
      dispatch(editPessoaJuridica(cliente, history))
    },
    onFetch: (id, pessoaFisica) => {
      dispatch(fetchPessoaJuridica(id, false))
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ClienteEdit);
