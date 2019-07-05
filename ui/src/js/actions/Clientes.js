import fetch from 'isomorphic-fetch'


export const CREATING_PESSOA_FISICA                 = 'CREATING_PESSOA_FISICA'
export const CREATED_PESSOA_FISICA                  = 'CREATED_PESSOA_FISICA'
export const EDITING_PESSOA_FISICA                  = 'EDITING_PESSOA_FISICA'
export const EDITED_PESSOA_FISICA                   = 'EDITED_PESSOA_FISICA'
export const FETCHING_PESSOAS_FISICAS               = 'FETCHING_PESSOAS_FISICAS'
export const FETCHING_PESSOA_FISICA                 = 'FETCHING_PESSOA_FISICA'
export const FETCHED_PESSOA_FISICA                  = 'FETCHING_PESSOA_FISICA'
export const FETCHED_PESSOAS_FISICAS                = 'FETCHING_PESSOAS_FISICAS'
export const DELETING_PESSOA_FISICA                 = 'DELETING_PESSOA_FISICA'
export const DELETED_PESSOA_FISICA                  = 'DELETED_PESSOA_FISICA'
export const ERROR_FETCHING_PESSOAS_FISICAS         = 'ERROR_FETCHING_PESSOAS_FISICAS'
export const ERROR_FETCHING_PESSOA_FISICA           = 'ERROR_FETCHING_PESSOA_FISICA'
export const ERROR_CREATING_PESSOA_FISICA           = 'ERROR_CREATING_PESSOA_FISICA'
export const ERROR_EDITING_PESSOA_FISICA            = 'ERROR_EDITING_PESSOA_FISICA'
export const ERROR_DELETING_PESSOA_FISICA           = 'ERROR_DELETING_PESSOA_FISICA'

export const CREATING_PESSOA_JURIDICA               = 'CREATING_PESSOA_JURIDICA'
export const CREATED_PESSOA_JURIDICA                = 'CREATED_PESSOA_JURIDICA'
export const EDITING_PESSOA_JURIDICA                = 'EDITING_PESSOA_JURIDICA'
export const EDITED_PESSOA_JURIDICA                 = 'EDITED_PESSOA_JURIDICA'
export const FETCHING_PESSOAS_JURIDICAS             = 'FETCHING_PESSOAS_JURIDICAS'
export const FETCHING_PESSOA_JURIDICA               = 'FETCHING_PESSOA_JURIDICA'
export const FETCHED_PESSOAS_JURIDICAS              = 'FETCHED_PESSOAS_JURIDICAS'
export const FETCHED_PESSOA_JURIDICA                = 'FETCHED_PESSOA_JURIDICA'
export const DELETING_PESSOA_JURIDICA               = 'DELETING_PESSOA_JURIDICA'
export const DELETED_PESSOA_JURIDICA                = 'DELETED_PESSOA_JURIDICA'
export const ERROR_FETCHING_PESSOA_JURIDICA         = 'ERROR_FETCHING_PESSOA_JURIDICA'
export const ERROR_FETCHING_PESSOAS_JURIDICAS       = 'ERROR_FETCHING_PESSOAS_JURIDICAS'
export const ERROR_CREATING_PESSOA_JURIDICA         = 'ERROR_CREATING_PESSOA_JURIDICA'
export const ERROR_EDITING_PESSOA_JURIDICA          = 'ERROR_EDITING_PESSOA_JURIDICA'
export const ERROR_DELETING_PESSOA_JURIDICA         = 'ERROR_DELETING_PESSOA_JURIDICA'
export const HIDE_CLIENTE_MESSAGE                   = 'HIDE_CLIENTE_MESSAGE'


export function hideMessage() {
  return {
    type: HIDE_CLIENTE_MESSAGE
  }
}

export function creatingPessoaFisica() {
  return {
    type: CREATING_PESSOA_FISICA
  }
}


export function creatingPessoaJuridica() {
  return {
    type: CREATING_PESSOA_JURIDICA
  }
}


export function editingPessoaFisica() {
  return {
    type: EDITING_PESSOA_FISICA
  }
}


export function editingPessoaJuridica() {
  return {
    type: EDITING_PESSOA_JURIDICA
  }
}


export function createdPessoaFisica(cliente) {
  return {
    type:       CREATED_PESSOA_FISICA,
    cliente:    cliente,
    receivedAt: Date.now()
  }
}


export function createdPessoaJuridica(cliente) {
  return {
    type:       CREATED_PESSOA_JURIDICA,
    cliente:    cliente,
    receivedAt: Date.now()
  }
}


export function editedPessoaFisica(cliente) {
  return {
    type:       EDITED_PESSOA_FISICA,
    cliente:    cliente,
    receivedAt: Date.now()
  }
}


export function editedPessoaJuridica(cliente) {
  return {
    type:       EDITED_PESSOA_JURIDICA,
    cliente:    cliente,
    receivedAt: Date.now()
  }
}


export function fetchingPessoaFisica() {
  return {
    type: FETCHING_PESSOA_FISICA
  }
}


export function fetchingPessoaJuridica() {
  return {
    type: FETCHING_PESSOA_JURIDICA
  }
}


export function fetchedPessoaFisica(json) {
  return {
    type:       FETCHED_PESSOA_FISICA,
    cliente:    json.cliente,
    receivedAt: Date.now()
  }
}


export function fetchedPessoaJuridica(json) {
  return {
    type:       FETCHED_PESSOA_JURIDICA,
    cliente:    json.cliente,
    receivedAt: Date.now()
  }
}


export function fetchingPessoasFisicas() {
  return {
    type: FETCHING_PESSOAS_FISICAS
  }
}


export function fetchingPessoasJuridicas() {
  return {
    type: FETCHING_PESSOAS_JURIDICAS
  }
}


export function fetchedPessoasFisicas(json) {
  return {
    type:       FETCHED_PESSOAS_FISICAS,
    clientes:   json.clientes,
    receivedAt: Date.now()
  }
}


export function fetchedPessoasJuridicas(json) {
  return {
    type:       FETCHED_PESSOAS_JURIDICAS,
    clientes:   json.clientes,
    receivedAt: Date.now()
  }
}


export function deletingPessoaFisica() {
  return {
    type: DELETING_PESSOA_FISICA,
  }
}


export function deletingPessoaJuridica() {
  return {
    type: DELETING_PESSOA_JURIDICA,
  }
}


export function deletedPessoaFisica(id) {
  return {
    type:       DELETED_PESSOA_FISICA,
    clienteId:  id,
    receivedAt: Date.now()
  }
}


export function deletedPessoaJuridica(id) {
  return {
    type:       DELETED_PESSOA_JURIDICA,
    clienteId:  id,
    receivedAt: Date.now()
  }
}


export function deletePessoaFisica(id) {
  return async function (dispatch, getState) {
    try {
      dispatch(deletingPessoaFisica())
      let  url = '/api/clientes/pessoafisica/'
      let response = await fetch(url + id, { headers: { 'content-type':  'application/json' } })
      if (!response.ok) {
        return { type: ERROR_DELETING_PESSOA_FISICA, message: 'unable to delete cliente ' + id, receivedAt: Date.now() }
      }
      return dispatch(deletedPessoaFisica(await response.json()))
    } catch (error) {
      return { type: ERROR_DELETING_PESSOA_FISICA, receivedAt: Date.now(), message: error }
    }
  }
}


export function deletePessoaJuridica(id) {
  return async function (dispatch, getState) {
    try {
      dispatch(deletingPessoaFisica())
      let url = '/api/clientes/pessoajuridica/'
      let response = await fetch(url + id, { headers: { 'content-type':  'application/json' } })
      if (!response.ok) {
        return { type: ERROR_DELETING_PESSOA_JURIDICA, message: 'unable to delete cliente ' + id, receivedAt: Date.now() }
      }
      return dispatch(deletedPessoaJuridica(await response.json()))
    } catch (error) {
      return { type: ERROR_DELETING_PESSOA_JURIDICA, receivedAt: Date.now(), message: error }
    }
  }
}


export function fetchPessoasFisicas() {
  return async function (dispatch, getState) {
    try {
      let url = '/api/clientes/pessoafisica/'
      dispatch(fetchingPessoasFisicas())
      let response = await fetch(url, { headers: { 'content-type':  'application/json' } })
      if (!response.ok) {
        return { type: ERROR_FETCHING_PESSOAS_FISICAS, message: 'unable to fetch clientes', receivedAt: Date.now() }
      }
      return dispatch(fetchedPessoasFisicas(await response.json()))
    } catch (error) {
      return dispatch({ type: ERROR_FETCHING_PESSOAS_FISICAS, receivedAt: Date.now(), message: error })
    }
  }
}


export function fetchPessoasJuridicas() {
  return async function (dispatch, getState) {
    try {
      let url = '/api/clientes/pessoajuridica/'
      dispatch(fetchingPessoasJuridicas())
      let response = await fetch(url, { headers: { 'content-type':  'application/json' } })
      if (!response.ok) {
        return { type: ERROR_FETCHING_PESSOAS_JURIDICAS, message: 'unable to fetch clientes', receivedAt: Date.now() }
      }
      return dispatch(fetchedPessoasJuridicas(await response.json()))
    } catch (error) {
      return dispatch({ type: ERROR_FETCHING_PESSOAS_JURIDICAS, receivedAt: Date.now(), message: error })
    }
  }
}


export function fetchPessoaFisica(id) {
  return async function (dispatch, getState) {
    try {
      dispatch(fetchingPessoaFisica())
      let url = '/api/clientes/pessoafisica/'
      let response = await fetch(url + id, { headers: { 'content-type':  'application/json' } })
      if (!response.ok) {
        return { type: ERROR_FETCHING_PESSOA_FISICA, message: 'unable to fetch cliente ' + id, receivedAt: Date.now() }
      }
      return dispatch(fetchedPessoaFisica(await response.json()))
    } catch (error) {
      return dispatch({ type: ERROR_FETCHING_PESSOA_FISICA, receivedAt: Date.now(), message: error })
    }
  }
}


export function fetchPessoaJuridica(id) {
  return async function (dispatch, getState) {
    try {
      dispatch(fetchingPessoaJuridica())
      let url = '/api/clientes/pessoajuridica/'
      let response = await fetch(url + id, { headers: { 'content-type':  'application/json' } })
      if (!response.ok) {
        return { type: ERROR_FETCHING_PESSOA_JURIDICA, message: 'unable to fetch cliente ' + id, receivedAt: Date.now() }
      }
      return dispatch(fetchedPessoaJuridica(await response.json()))
    } catch (error) {
      return dispatch({ type: ERROR_FETCHING_PESSOA_JURIDICA, receivedAt: Date.now(), message: error })
    }
  }
}


export function createPessoaJuridica(cliente, history) {
  return async function (dispatch, getState) {
    try {
      dispatch(creatingPessoaJuridica())
      let url = '/api/clientes/pessoajuridica' 
      let response = fetch(url, {
        method:  'POST',
        body:  JSON.stringify(
          {
            companyName:    cliente.companyName,
            cpf:            cliente.cnpj,
            phones:         cliente.phones,
            postalCode:     cliente.postalCode,
            email:          cliente.email
          }),
        headers: {
          'content-type':  'application/json'
        }
      })
      if (!response.ok) {
        let error = 'unable to edit cliente'
        throw error
      }
      return onPessoaJuridicaCreated(await response.json(), history, dispatch)
    } catch (error) {
      console.log('unable to edit cliente: %s', error)
      return dispatch({ type: ERROR_EDITING_PESSOA_JURIDICA, message: 'unable to create cliente', receivedAt: Date.now() })
    }
  }
}


export function createPessoaFisica(cliente, history) {
  return async function (dispatch, getState) {
    try {
      dispatch(creatingPessoaFisica())
      let url = '/api/clientes/pessoafisica'
      let response = fetch(url, {
        method:  'POST',
        body:  JSON.stringify(
          {
            name:       cliente.name,
            cpf:        cliente.cpf,
            phones:     cliente.phones,
            postalCode: cliente.postalCode,
            email:      cliente.email
          }),
        headers: {
          'content-type':  'application/json'
        }
      })
      if (!response.ok) {
        let error = 'unable to edit cliente'
        throw error
      }
      return onPessoaFisicaCreated(await response.json(), history, dispatch)
    } catch (error) {
      console.log('unable to edit cliente: %s', error)
      return dispatch({ type: ERROR_EDITING_PESSOA_FISICA, message: 'unable to create cliente', receivedAt: Date.now() })
    }
  }
}


export function editPessoaJuridica(cliente, history) {
  return async function (dispatch, getState) {
    try {
      dispatch(editingPessoaJuridica())
      let url = '/api/clientes/pessoajuridica'
      let response = fetch(url, {
        method:  'PUT',
        body:  JSON.stringify(
          {
            companyName:  cliente.companyName,
            cnpj:         cliente.cnpj,
            phones:       cliente.phones,
            postalCode:   cliente.postalCode,
            email:        cliente.email
          }),
        headers: {
          'content-type':  'application/json'
        }
      })
      if (!response.ok) {
        let error = 'unable to edit cliente'
        throw error
      }
      return onPessoaJuridicaEdited(await response.json(), history, dispatch)
    } catch (error) {
      console.log('unable to edit cliente: %s', error)
      return dispatch({ type: ERROR_EDITING_PESSOA_JURIDICA, message: 'unable to edit cliente ' + cliente.id, receivedAt: Date.now() })
    }
  }
}


export function editPessoaFisica(cliente, history) {
  return async function (dispatch, getState) {
    try {
      dispatch(editingPessoaFisica())
      let url = '/api/clientes/pessoafisica'
      let response = fetch(url, {
        method:  'PUT',
        body:  JSON.stringify(
          {
            name:       cliente.name,
            cpf:        cliente.cpfCnpj,
            phones:     cliente.phones,
            postalCode: cliente.postalCode,
            email:      cliente.email
          }),
        headers: {
          'content-type':  'application/json'
        }
      })
      if (!response.ok) {
        let error = 'unable to edit cliente'
        throw error
      }
      return onPessoaFisicaEdited(await response.json(), history, dispatch)
    } catch (error) {
      console.log('unable to edit cliente: %s', error)
      return dispatch({ type: ERROR_EDITING_PESSOA_FISICA, message: 'unable to edit cliente ' + cliente.id, receivedAt: Date.now() })
    }
  }
}


function onPessoaJuridicaCreated(cliente, history, dispatch) {
  dispatch(createdPessoaJuridica(cliente))
  history.push('/clientes')
}


function onPessoaJuridicaEdited(cliente, history, dispatch) {
  dispatch(editedPessoaJuridica(cliente))
  history.push('/clientes')
}


function onPessoaFisicaEdited(cliente, history, dispatch) {
  dispatch(editedPessoaFisica(cliente))
  history.push('/clientes')
}


function onPessoaFisicaCreated(cliente, history, dispatch) {
  dispatch(createdPessoaFisica(cliente))
  history.push('/clientes')
}
