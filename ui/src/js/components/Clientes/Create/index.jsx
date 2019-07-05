import ClienteCreate   from './create'
import { connect } from 'react-redux'
import {
  createCliente,
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
      dispatch(createCliente(cliente, history))
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ClienteCreate);
