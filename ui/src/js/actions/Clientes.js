import fetch from 'isomorphic-fetch'

export const CREATING_CLIENTE               = 'CREATING_CLIENTE'
export const CREATED_CLIENTE                = 'CREATED_CLIENTE'
export const EDITED_CLIENTE                 = 'EDITED_CLIENTE'
export const EDITING_CLIENTE                = 'EDITING_CLIENTE'
export const FETCHING_CLIENTES              = 'FETCHING_CLIENTES'
export const FETCHING_CLIENTE               = 'FETCHING_CLIENTE'
export const FETCHED_CLIENTES               = 'FETCHED_CLIENTES'
export const FETCHED_CLIENTE                = 'FETCHED_CLIENTE'
export const DELETING_CLIENTE               = 'DELETING_CLIENTE'
export const DELETED_CLIENTE                = 'DELETED_CLIENTE'
export const DISPLAY_CREATE_CLIENTE_MODAL   = 'DISPLAY_CREATE_CLIENTE_MODAL'
export const HIDE_CREATE_CLIENTE_MODAL      = 'HIDE_CREATE_CLIENTE_MODAL'
export const DISPLAY_EDIT_CLIENTE_MODAL     = 'DISPLAY_EDIT_CLIENTE_MODAL'
export const HIDE_EDIT_CLIENTE_MODAL        = 'HIDE_EDIT_CLIENTE_MODAL'
export const ERROR_FETCHING_CLIENTES        = 'ERROR_FETCHING_CLIENTES'
export const ERROR_FETCHING_CLIENTE         = 'ERROR_FETCHING_CLIENTE'
export const ERROR_CREATING_CLIENTE         = 'ERROR_CREATING_CLIENTE'
export const ERROR_EDITING_CLIENTE          = 'ERROR_EDITING_CLIENTE'
export const ERROR_DELETING_CLIENTE         = 'ERROR_DELETING_CLIENTE'
export const HIDE_CLIENTE_MESSAGE           = 'HIDE_CLIENTE_MESSAGE'


export function hideMessage() {
  return {
    type: HIDE_CLIENTE_MESSAGE
  }
}


export function displayCreateClienteModal() {
  return {
    type: DISPLAY_CREATE_CLIENTE_MODAL
  }
}


export function hideCreateClienteModal() {
  return {
    type: HIDE_CREATE_CLIENTE_MODAL
  }
}


export function displayEditClienteModal() {
  return {
    type: DISPLAY_EDIT_CLIENTE_MODAL
  }
}


export function hideEditClienteModal() {
  return {
    type: HIDE_EDIT_CLIENTE_MODAL
  }
}


export function creatingCliente() {
  return {
    type: CREATING_CLIENTE
  }
}


export function createdCliente(cliente) {
  return {
    type:       CREATED_CLIENTE,
    cliente:    cliente,
    receivedAt: Date.now()
  }
}


export function editedCliente(cliente) {
  return {
    type:       EDITED_CLIENTE,
    cliente:    cliente,
    receivedAt: Date.now()
  }
}


export function fetchingCliente() {
  return {
    type: FETCHING_CLIENTE
  }
}


export function fetchedCliente(json) {
  return {
    type:       FETCHED_CLIENTE,
    cliente:    json.cliente,
    receivedAt: Date.now()
  }
}


export function fetchingClientes() {
  return {
    type: FETCHING_CLIENTES
  }
}


export function fetchedClientes(json) {
  return {
    type:       FETCHED_CLIENTES,
    clientes:   json.clientes,
    receivedAt: Date.now()
  }
}


export function deletingCliente() {
  return {
    type: DELETING_CLIENTE,
  }
}


export function deletedCliente(id) {
  return {
    type:       DELETED_CLIENTE,
    clienteId:  id,
    receivedAt: Date.now()
  }
}


export function deleteCliente(id) {
  return async function (dispatch, getState) {
    try {
      dispatch(deletingCliente())
      let response = await fetch('/api/clientes/' + id, { headers: { 'content-type':  'application/json' } })
      if (!response.ok) {
        return { type: ERROR_DELETING_CLIENTE, message: 'unable to delete cliente ' + id, receivedAt: Date.now() }
      }
      return dispatch(deletedCliente(await response.json()))
    } catch (error) {
      return { type: ERROR_DELETING_CLIENTE, receivedAt: Date.now(), message: error }
    }
  }
}


export function fetchClientes() {
  return async function (dispatch, getState) {
    try {
      dispatch(fetchingClientes())
      let response = await fetch('/api/clientes', { headers: { 'content-type':  'application/json' } })
      if (!response.ok) {
        return { type: ERROR_FETCHING_CLIENTES, message: 'unable to fetch clientes', receivedAt: Date.now() }
      }
      return dispatch(fetchedClientes(await response.json()))
    } catch (error) {
      return dispatch({ type: ERROR_FETCHING_CLIENTES, receivedAt: Date.now(), message: error })
    }
  }
}


export function fetchCliente(id, pessoaFisica) {
  return async function (dispatch, getState) {
    try {
      dispatch(fetchingCliente())
      let url = ''
      if (pessoaFisica)
        url = '/api/clientes/pessoafisica/'
      else
        url = '/api/clientes/pessoajuridica/'
      let response = await fetch(url + id, { headers: { 'content-type':  'application/json' } })
      if (!response.ok) {
        return { type: ERROR_FETCHING_CLIENTE, message: 'unable to fetch cliente ' + id, receivedAt: Date.now() }
      }
      return dispatch(fetchedCliente(await response.json()))
    } catch (error) {
      return dispatch({ type: ERROR_FETCHING_CLIENTE, receivedAt: Date.now(), message: error })
    }
  }
}


export function createCliente(cliente, pessoaFisica, history) {
  return async function (dispatch, getState) {
    try {
      dispatch(creatingCliente())
      let url = ''
      if (pessoaFisica)
        url = '/api/clientes/pessoafisica'
      else
        url = '/api/clientes/pessoajuridica'
      let response = fetch(url, {
        method:  'POST',
        body:  JSON.stringify(cliente),
        headers: {
          'content-type':  'application/json'
        }
      })
      if (!response.ok) {
        let error = 'unable to edit cliente'
        throw error
      }
      return onClienteCreated(await response.json(), history, dispatch)
    } catch (error) {
      console.log('unable to edit cliente: %s', error)
      return dispatch({ type: ERROR_EDITING_CLIENTE, message: 'unable to create cliente', receivedAt: Date.now() })
    }
  }
}


export function editCliente(cliente, history) {
  return async function (dispatch, getState) {
    try {
      dispatch(creatingCliente())
      let url = ''
      if (cliente.cpf)
        url = '/api/clientes/pessoafisica'
      else if (cliente.cnpj)
        url = '/api/clientes/pessoajuridica'
      let response = fetch(url, {
        method:  'PUT',
        body:  JSON.stringify(cliente),
        headers: {
          'content-type':  'application/json'
        }
      })
      if (!response.ok) {
        let error = 'unable to edit cliente'
        throw error
      }
      return onClienteEdited(await response.json(), history, dispatch)
    } catch (error) {
      console.log('unable to edit cliente: %s', error)
      return dispatch({ type: ERROR_EDITING_CLIENTE, message: 'unable to edit cliente ' + cliente.id, receivedAt: Date.now() })
    }
  }
}


function onClienteCreated(cliente, history, dispatch) {
  dispatch(createdCliente(cliente))
  history.push('/clientes')
}


function onClienteEdited(cliente, history, dispatch) {
  dispatch(editedCliente(cliente))
  history.push('/clientes')
}
