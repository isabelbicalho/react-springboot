import {
  CREATING_CLIENTE,
  CREATED_CLIENTE,
  FETCHING_CLIENTES,
  FETCHED_CLIENTES,
  DELETING_CLIENTE,
  DELETED_CLIENTE,
  DISPLAY_CREATE_CLIENTE_MODAL,
  HIDE_CREATE_CLIENTE_MODAL,
  DISPLAY_EDIT_CLIENTE_MODAL,
  HIDE_EDIT_CLIENTE_MODAL,
  ERROR_FETCHING_CLIENTES,
  ERROR_CREATING_CLIENTE,
  ERROR_EDITING_CLIENTE,
  ERROR_DELETING_CLIENTE,
  HIDE_CLIENTE_MESSAGE,
} from 'js/actions/Clientes'


const initialState = {
  isFetching: false,
  displayCreateModal: false,
  displayEditModal: false,
  hasError: false,
  message: null,
  items: []
}


export const clientes = (state = initialState, action) => {
  switch(action.type) {
    case CREATING_CLIENTE:
      return Object.assign({}, state, { hasError: false, message: null, registered: false })
    case CREATED_CLIENTE:
      return Object.assign({}, state, { hasError: false, message: action.message, items: state.items.concat([action.cliente]), lastUpdated: action.receivedAt })
    case FETCHING_CLIENTES:
      return Object.assign({}, state, { hasError: false, message: null, isFetching: true })
    case FETCHED_CLIENTES:
      return Object.assign({}, state, { hasError: false, message: action.message, isFetching: false, items: action.clientes })
    case DELETING_CLIENTE:
      return Object.assign({}, state, { hasError: false, message: null })
    case DELETED_CLIENTE:
      return Object.assign({}, state, { hasError: false, message: action.message, items: state.items.filter(item => item.id !== action.clienteId), lastUpdated: action.receivedAt })
    case DISPLAY_CREATE_CLIENTE_MODAL:
      return Object.assign({}, state, { displayCreateModal: true })
    case HIDE_CREATE_CLIENTE_MODAL:
      return Object.assign({}, state, { displayCreateModal: false })
    case DISPLAY_EDIT_CLIENTE_MODAL:
      return Object.assign({}, state, { displayEditModal: true })
    case HIDE_EDIT_CLIENTE_MODAL:
      return Object.assign({}, state, { displayEditModal: false })
    case HIDE_CLIENTE_MESSAGE:
      return Object.assign({}, state, { hasError: false, message: null })
    case ERROR_FETCHING_CLIENTES:
    case ERROR_CREATING_CLIENTE:
    case ERROR_EDITING_CLIENTE:
    case ERROR_DELETING_CLIENTE:
      return Object.assign({}, state, { message: action.message, hasError: true })
    default:
      return state
  }
}

