import fetch from 'isomorphic-fetch'

export const CREATING_CLIENTE               = 'CREATING_CLIENTE'
export const CREATED_CLIENTE                = 'CREATED_CLIENTE'
export const FETCHING_CLIENTES              = 'FETCHING_CLIENTES'
export const FETCHED_CLIENTES               = 'FETCHED_CLIENTES'
export const DELETING_CLIENTE               = 'DELETING_CLIENTE'
export const DELETED_CLIENTE                = 'DELETED_CLIENTE'
export const DISPLAY_CREATE_CLIENTE_MODAL   = 'DISPLAY_CREATE_CLIENTE_MODAL'
export const HIDE_CREATE_CLIENTE_MODAL      = 'HIDE_CREATE_CLIENTE_MODAL'
export const DISPLAY_EDIT_CLIENTE_MODAL     = 'DISPLAY_EDIT_CLIENTE_MODAL'
export const HIDE_EDIT_CLIENTE_MODAL        = 'HIDE_EDIT_CLIENTE_MODAL'
export const ERROR_FETCHING_CLIENTES        = 'ERROR_FETCHING_CLIENTES'
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
      return { type: ERROR_FETCHING_CLIENTES, receivedAt: Date.now(), message: error }
    }
  }
}


export function createCliente(address, number, complement, district, city, state, zipCode, totalArea, cityId, description) {
  return function (dispatch, getState) {
    dispatch(creatingCliente())
    return fetch('/api/clientes', {
      method:  'POST',
      body:  JSON.stringify(
        { cliente:
          {
            address,
            number,
            complement,
            district,
            city,
            state,
            zip_code: zipCode,
            total_area: totalArea,
            description,
            city_id: cityId
          }
        }),
      headers: {
        'content-type':  'application/json'
      }
    })
    .then(function (response) {
      if (!response.ok) {
        //dispatch(displayFlashMessage('Could not create cliente', 'error'))
        let error = 'unable to create cliente: ' + response
        throw error
      }
      return response.json().then(json => onClienteCreated(response, json, dispatch))
    })
    .catch(error => console.log("unable to create event: %s", error))
  }
}


export function editCliente(address, number, complement, district, city, state, zipCode, totalArea, cityId, description) {
  return function (dispatch, getState) {
    dispatch(creatingCliente())
    return fetch('/api/clientes', {
      method:  'POST',
      body:  JSON.stringify(
        { cliente:
          {
            address,
            number,
            complement,
            district,
            city,
            state,
            zip_code: zipCode,
            total_area: totalArea,
            description,
            city_id: cityId
          }
        }),
      headers: {
        'content-type':  'application/json'
      }
    })
    .then(function (response) {
      if (!response.ok) {
        //dispatch(displayFlashMessage('Could not create cliente', 'error'))
        let error = 'unable to create cliente: ' + response
        throw error
      }
      return response.json().then(json => onClienteCreated(response, json, dispatch))
    })
    .catch(error => console.log("unable to create event: %s", error))
  }
}


function onClienteCreated(response, json, dispatch) {
  dispatch(createdCliente(json.cliente))
  // dispatch(displayFlashMessage('Cliente created', 'success'))
  // dispatch(hideCreateClienteModal())
}
