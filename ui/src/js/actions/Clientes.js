import fetch from 'isomorphic-fetch'


export const CREATING_PESSOA_FISICA                 = 'CREATING_PESSOA_FISICA'
export const CREATED_PESSOA_FISICA                  = 'CREATED_PESSOA_FISICA'
export const EDITING_PESSOA_FISICA                  = 'EDITING_PESSOA_FISICA'
export const EDITED_PESSOA_FISICA                   = 'EDITED_PESSOA_FISICA'
export const FETCHING_PESSOAS_FISICAS               = 'FETCHING_PESSOAS_FISICAS'
export const FETCHING_PESSOA_FISICA                 = 'FETCHING_PESSOA_FISICA'
export const FETCHED_PESSOA_FISICA                  = 'FETCHED_PESSOA_FISICA'
export const FETCHED_PESSOAS_FISICAS                = 'FETCHED_PESSOAS_FISICAS'
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


export const FETCHING_ALL_CLIENTS                   = 'FETCHING_ALL_CLIENTS'
export const ERROR_FETCHING_ALL_CLIENTS             = 'ERROR_FETCHING_ALL_CLIENTS'
export const FETCHED_ALL_CLIENTS                    = 'FETCHED_ALL_CLIENTS'


export function hideMessage() {
  return {
    type: HIDE_CLIENTE_MESSAGE
  }
}


export function fetchingAllClients() {
  return {
    type: FETCHING_ALL_CLIENTS
  }
}


export function fetchAllClients() {
  return async function (dispatch) {
    try {
      let urlFisica = '/api/clientes/pessoafisica'
      let urlJuridica = '/api/clientes/pessoajuridica'
      dispatch(fetchingAllClients())
      let response = await fetch(urlFisica, { headers: { 'content-type':  'application/json' } })
      if (!response.ok) {
        return dispatch({ type: ERROR_FETCHING_PESSOAS_FISICAS, message: 'unable to fetch clientes', receivedAt: Date.now() })
      }
      let pessoasFisicas = await response.json()
      response = await fetch(urlJuridica, { headers: { 'content-type':  'application/json' } })
      if (!response.ok) {
        return dispatch({ type: ERROR_FETCHING_PESSOAS_JURIDICAS, message: 'unable to fetch clientes', receivedAt: Date.now() })
      }
      let pessoasJuridicas = await response.json()
      return dispatch(fetchedAllClients(pessoasFisicas, pessoasJuridicas))
    } catch (error) {
      return dispatch({ type: ERROR_FETCHING_ALL_CLIENTS, receivedAt: Date.now(), message: error })
    }
  }
}


export function fetchedAllClients(pessoasFisicas, pessoasJuridicas) {
  return {
    type: FETCHED_ALL_CLIENTS,
    pessoasFisicas: pessoasFisicas,
    pessoasJuridicas: pessoasJuridicas
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
    cliente:    json,
    receivedAt: Date.now()
  }
}


export function fetchedPessoaJuridica(json) {
  return {
    type:       FETCHED_PESSOA_JURIDICA,
    cliente:    json,
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
    clientes:   json,
    receivedAt: Date.now()
  }
}


export function fetchedPessoasJuridicas(json) {
  return {
    type:       FETCHED_PESSOAS_JURIDICAS,
    clientes:   json,
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
  return async function (dispatch) {
    try {
      dispatch(deletingPessoaFisica())
      let  url = '/api/clientes/pessoafisica/'
      let response = await fetch(url + id, { method: 'DELETE', headers: { 'Accept': 'application/json', 'content-type':  'application/json' } })
      if (!response.ok) {
        return { type: ERROR_DELETING_PESSOA_FISICA, message: 'unable to delete cliente ' + id, receivedAt: Date.now() }
      }
      return dispatch(deletedPessoaFisica(id))
    } catch (error) {
      return { type: ERROR_DELETING_PESSOA_FISICA, receivedAt: Date.now(), message: error }
    }
  }
}


export function deletePessoaJuridica(id) {
  return async function (dispatch) {
    try {
      dispatch(deletingPessoaFisica())
      let url = '/api/clientes/pessoajuridica/'
      let response = await fetch(url + id, { method: 'DELETE', headers: {'Accept': 'application/json', 'content-type':  'application/json' } })
      if (!response.ok) {
        return { type: ERROR_DELETING_PESSOA_JURIDICA, message: 'unable to delete cliente ' + id, receivedAt: Date.now() }
      }
      return dispatch(deletedPessoaJuridica(id))
    } catch (error) {
      return { type: ERROR_DELETING_PESSOA_JURIDICA, receivedAt: Date.now(), message: error }
    }
  }
}


export function fetchPessoasFisicas() {
  return async function (dispatch) {
    try {
      let url = '/api/clientes/pessoafisica'
      dispatch(fetchingPessoasFisicas())
      let response = await fetch(url, { headers: { 'content-type':  'application/json' } })
      if (!response.ok) {
        return dispatch({ type: ERROR_FETCHING_PESSOAS_FISICAS, message: 'unable to fetch clientes', receivedAt: Date.now() })
      }
      return dispatch(fetchedPessoasFisicas(await response.json()))
    } catch (error) {
      return dispatch({ type: ERROR_FETCHING_PESSOAS_FISICAS, receivedAt: Date.now(), message: error })
    }
  }
}


export function fetchPessoasJuridicas() {
  return async function (dispatch) {
    try {
      let url = '/api/clientes/pessoajuridica'
      dispatch(fetchingPessoasJuridicas())
      let response = await fetch(url, { headers: { 'content-type':  'application/json' } })
      if (!response.ok) {
        return dispatch({ type: ERROR_FETCHING_PESSOAS_JURIDICAS, message: 'unable to fetch clientes', receivedAt: Date.now() })
      }
      return dispatch(fetchedPessoasJuridicas(await response.json()))
    } catch (error) {
      return dispatch({ type: ERROR_FETCHING_PESSOAS_JURIDICAS, receivedAt: Date.now(), message: error })
    }
  }
}


export function fetchPessoaFisica(id) {
  return async function (dispatch) {
    try {
      dispatch(fetchingPessoaFisica())
      let url = '/api/clientes/pessoafisica/'
      let response = await fetch(url + id, { headers: { 'content-type':  'application/json' } })
      if (!response.ok) {
        return dispatch({ type: ERROR_FETCHING_PESSOA_FISICA, message: 'unable to fetch cliente ' + id, receivedAt: Date.now() })
      }
      return dispatch(fetchedPessoaFisica(await response.json()))
    } catch (error) {
      return dispatch({ type: ERROR_FETCHING_PESSOA_FISICA, receivedAt: Date.now(), message: error })
    }
  }
}


export function fetchPessoaJuridica(id) {
  return async function (dispatch) {
    try {
      dispatch(fetchingPessoaJuridica())
      let url = '/api/clientes/pessoajuridica/'
      let response = await fetch(url + id, { headers: { 'content-type':  'application/json' } })
      if (!response.ok) {
        return dispatch({ type: ERROR_FETCHING_PESSOA_JURIDICA, message: 'unable to fetch cliente ' + id, receivedAt: Date.now() })
      }
      return dispatch(fetchedPessoaJuridica(await response.json()))
    } catch (error) {
      return dispatch({ type: ERROR_FETCHING_PESSOA_JURIDICA, receivedAt: Date.now(), message: error })
    }
  }
}


export function createPessoaJuridica(cliente, history) {
  return async function (dispatch) {
    try {
      dispatch(creatingPessoaJuridica())
      let url = '/api/clientes/pessoajuridica' 
      let response = await fetch(url, {
        method:  'POST',
        body:  JSON.stringify(
          {
            companyName:    cliente.companyName,
            cpnj:           cliente.cnpj,
            phones:         cliente.phones,
            postalCode:     cliente.postalCode,
            email:          cliente.email,
            stage:          cliente.stage
          }),
        headers: {
          'content-type':  'application/json'
        }
      })
      if (!response.ok) {
        let error = 'unable to create pessoa juridica'
        throw error
      }
      return onPessoaJuridicaCreated(await response.json(), history, dispatch)
    } catch (error) {
      console.log('unable to create pessoa juridica: %s', error)
      return dispatch({ type: ERROR_CREATING_PESSOA_JURIDICA, message: 'unable to create cliente', receivedAt: Date.now() })
    }
  }
}


export function createPessoaFisica(cliente, history) {
  return async function (dispatch) {
    try {
      dispatch(creatingPessoaFisica())
      let url = '/api/clientes/pessoafisica'
      let response = await fetch(url, {
        method:  'POST',
        body:  JSON.stringify(
          {
            name:       cliente.name,
            cpf:        cliente.cpf,
            phones:     cliente.phones,
            postalCode: cliente.postalCode,
            email:      cliente.email,
            stage:      cliente.stage
          }),
        headers: {
          'content-type':  'application/json'
        }
      })
      if (!response.ok) {
        let error = 'unable to create pessoa fisica'
        throw error
      }
      return onPessoaFisicaCreated(await response.json(), history, dispatch)
    } catch (error) {
      console.log('unable to create pessoa fisica: %s', error)
      return dispatch({ type: ERROR_CREATING_PESSOA_FISICA, message: 'unable to create cliente', receivedAt: Date.now() })
    }
  }
}


export function editPessoaJuridica(cliente, history) {
  return async function (dispatch) {
    try {
      dispatch(editingPessoaJuridica())
      let url = '/api/clientes/pessoajuridica/'
      let response = await fetch(url + cliente.id, {
        method:  'PUT',
        body:  JSON.stringify(
          {
            id:           cliente.id,
            companyName:  cliente.companyName,
            cnpj:         cliente.cnpj,
            phones:       cliente.phones,
            postalCode:   cliente.postalCode,
            email:        cliente.email,
            stage:        cliente.stage
          }),
        headers: {
          'content-type':  'application/json',
          'Accept':        'application/json'
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
  return async function (dispatch) {
    try {
      dispatch(editingPessoaFisica())
      let url = '/api/clientes/pessoafisica/'
      let response = await fetch(url + cliente.id, {
        method:  'PUT',
        body:  JSON.stringify(
          {
            id:         cliente.id,
            name:       cliente.name,
            cpf:        cliente.cpf,
            phones:     cliente.phones,
            postalCode: cliente.postalCode,
            email:      cliente.email,
            stage:      cliente.stage
          }),
        headers: {
          'content-type':  'application/json',
          'Accept':        'application/json'
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
