import ClientesList   from './list'
import { connect } from 'react-redux'
import {
  editPessoaFisica,
  editPessoaJuridica,
  fetchPessoasFisicas,
  fetchPessoasJuridicas,
  deletePessoaFisica,
  deletePessoaJuridica,
} from 'js/actions/Clientes'

const mapStateToProps = (state) => {
  return {
    pessoasFisicas:   state.clientes.pessoasFisicas,
    pessoasJuridicas: state.clientes.pessoasJuridicas,
    hasError:         state.clientes.hasError,
    message:          state.clientes.message
  }
}


const mapDispatchToProps = (dispatch) => {
  return {
    onEditPessoaFisica: (cliente, history) => { 
      dispatch(editPessoaFisica(cliente, history))
    },
    onEditPessoaJuridica: (cliente, history) => { 
      dispatch(editPessoaJuridica(cliente, history))
    },
    onDeletePessoaFisica: (clienteId) => {
      dispatch(deletePessoaFisica(clienteId))
    },
    onDeletePessoaJuridica: (clienteId) => {
      dispatch(deletePessoaJuridica(clienteId))
    },
    onFetchPessoasJuridicas: () => {
      dispatch(fetchPessoasJuridicas())
    },
    onFetchPessoasFisicas: () => {
      dispatch(fetchPessoasFisicas())
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ClientesList);
