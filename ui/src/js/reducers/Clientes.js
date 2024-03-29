import {
  CREATING_PESSOA_FISICA,
  CREATED_PESSOA_FISICA,
  EDITING_PESSOA_FISICA,
  EDITED_PESSOA_FISICA,
  FETCHING_PESSOAS_FISICAS,
  FETCHING_PESSOA_FISICA,
  FETCHED_PESSOA_FISICA,
  FETCHED_PESSOAS_FISICAS,
  DELETING_PESSOA_FISICA,
  DELETED_PESSOA_FISICA,
  ERROR_FETCHING_PESSOAS_FISICAS,
  ERROR_FETCHING_PESSOA_FISICA,
  ERROR_CREATING_PESSOA_FISICA,
  ERROR_EDITING_PESSOA_FISICA,
  ERROR_DELETING_PESSOA_FISICA,
  CREATING_PESSOA_JURIDICA,
  CREATED_PESSOA_JURIDICA,
  EDITING_PESSOA_JURIDICA,
  EDITED_PESSOA_JURIDICA,
  FETCHING_PESSOAS_JURIDICAS,
  FETCHED_PESSOAS_JURIDICAS,
  FETCHED_PESSOA_JURIDICA,
  FETCHING_PESSOA_JURIDICA,
  DELETING_PESSOA_JURIDICA,
  DELETED_PESSOA_JURIDICA,
  ERROR_FETCHING_PESSOA_JURIDICA,
  ERROR_FETCHING_PESSOAS_JURIDICAS,
  ERROR_CREATING_PESSOA_JURIDICA,
  ERROR_EDITING_PESSOA_JURIDICA,
  ERROR_DELETING_PESSOA_JURIDICA,
  HIDE_CLIENTE_MESSAGE,
  FETCHING_ALL_CLIENTS,
  FETCHED_ALL_CLIENTS,
} from 'js/actions/Clientes'


const initialState = {
  isFetching: false,
  displayCreateModal: false,
  displayEditModal: false,
  hasError: false,
  message: null,
  pessoasFisicas: [],
  pessoasJuridicas: [],
  item: null
}


export const clientes = (state = initialState, action) => {
  switch(action.type) {

    case FETCHING_PESSOA_FISICA:
    case FETCHING_PESSOAS_FISICAS:
    case FETCHING_PESSOA_JURIDICA:
    case FETCHING_PESSOAS_JURIDICAS:
    case FETCHING_ALL_CLIENTS:
      return Object.assign({}, state, { hasError: false, message: null, isFetching: true })

    case FETCHED_ALL_CLIENTS:
      return Object.assign({}, state, { hasError: false, message: action.message, pessoasFisicas: action.pessoasFisicas, pessoasJuridicas: action.pessoasJuridicas, lastUpdated: action.receivedAt});

    case CREATED_PESSOA_FISICA:
      return Object.assign({}, state, { hasError: false, message: action.message, item: action.cliente, pessoasFisicas: state.pessoasFisicas.concat([action.cliente]), lastUpdated: action.receivedAt })
    case DELETED_PESSOA_FISICA:
      return Object.assign({}, state, { hasError: false, message: action.message, pessoasFisicas: state.pessoasFisicas.filter(item => item.id !== action.clienteId), lastUpdated: action.receivedAt })
    case FETCHED_PESSOAS_FISICAS:
      return Object.assign({}, state, { hasError: false, message: action.message, pessoasFisicas: action.clientes, lastUpdated: action.receivedAt});
    case EDITED_PESSOA_FISICA:
      return Object.assign({}, state, { hasError: false, message: action.message, pessoasFisicas: state.pessoasFisicas.map((item, index) => {if (item.id == action.cliente.id) { return action.cliente } else { return item }}), lastUpdated: action.receivedAt })
    

    case CREATED_PESSOA_JURIDICA:
      return Object.assign({}, state, { hasError: false, message: action.message, item: action.cliente, items: state.pessoasJuridicas.concat([action.cliente]), lastUpdated: action.receivedAt })
    case DELETED_PESSOA_JURIDICA:
      return Object.assign({}, state, { hasError: false, message: action.message, pessoasJuridicas: state.pessoasJuridicas.filter(item => item.id !== action.clienteId), lastUpdated: action.receivedAt })
    case FETCHED_PESSOAS_JURIDICAS:
      return Object.assign({}, state, { hasError: false, message: action.message, pessoasJuridicas: action.clientes, lastUpdated: action.receivedAt});
    case EDITED_PESSOA_JURIDICA:
      return Object.assign({}, state, { hasError: false, message: action.message, pessoasJuridicas: state.pessoasJuridicas.map((item, index) => {if (item.id == action.cliente.id) { return action.cliente } else { return item }}), lastUpdated: action.receivedAt })

    case FETCHED_PESSOA_FISICA:
    case FETCHED_PESSOA_JURIDICA:
      return Object.assign({}, state, { hasError: false, message: action.message, isFetching: false, item: action.cliente })

    default:
      return state
  }
}

