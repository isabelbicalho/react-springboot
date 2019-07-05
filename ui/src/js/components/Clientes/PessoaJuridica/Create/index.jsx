import CreateCliente   from './create'
import { connect } from 'react-redux'
import {
  createPessoaJuridica,
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
    onCreate: (cliente, history) => {
      dispatch(createPessoaJuridica(cliente, history))
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateCliente);
