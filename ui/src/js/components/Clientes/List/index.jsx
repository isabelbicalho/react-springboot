import ClientesList   from './list'
import { connect } from 'react-redux'
import {
  displayCreateClienteModal,
  hideCreateClienteModal,
  displayEditClienteModal,
  hideEditClienteModal,
  createCliente,
  editCliente,
  fetchClientes,
  deleteCliente
} from 'js/actions/Clientes'

const mapStateToProps = (state) => {
  return {
    clientes:   state.clientes.items,
    hasError:   state.clientes.hasError,
    message:    state.clientes.message
  }
}


const mapDispatchToProps = (dispatch) => {
  return {
    onCreate: () => {
      dispatch(createCliente())
    },
    onEdit: () => {
      dispatch(editCliente())
    },
    onDelete: () => {
      dispatch(deleteCliente())
    },
    onFetch: () => {
      dispatch(fetchClientes())
    },
    onDisplayCreateModal: () => {
      dispatch(displayCreateClienteModal())
    },
    onHideCreateModal: () => {
      dispatch(hideCreateClienteModal())
    },
    onDisplayEditClienteModal: () => {
      dispatch(displayEditClienteModal())
    },
    onHideEditClienteModal: () => {
      dispatch(hideEditClienteModal())
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ClientesList);
