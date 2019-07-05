import {
  CREATING_GIVER_REALTY,
  CREATED_GIVER_REALTY,
  FETCHING_GIVER_REALTIES,
  FETCHED_GIVER_REALTIES,
  DELETING_GIVER_REALTY,
  DELETED_GIVER_REALTY,
  DISPLAY_CREATE_GIVER_REALTY_MODAL,
  HIDE_CREATE_GIVER_REALTY_MODAL,
  CREATING_RECEPTOR_REALTY,
  CREATED_RECEPTOR_REALTY,
  FETCHING_RECEPTOR_REALTIES,
  FETCHED_RECEPTOR_REALTIES,
  DELETING_RECEPTOR_REALTY,
  DELETED_RECEPTOR_REALTY,
  DISPLAY_CREATE_RECEPTOR_REALTY_MODAL,
  HIDE_CREATE_RECEPTOR_REALTY_MODAL
} from '../actions/Realties'


const initialState = {
  giver: {
    isFetching: false,
    registered: false,
    displayCreateModal: false,
    errorMessage: null,
    items: []
  },
  receptor: {
    isFetching: false,
    registered: false,
    displayCreateModal: false,
    errorMessage: null,
    items: []
  }
}


export const realties = (state = initialState, action) => {
  switch(action.type) {
    case CREATING_GIVER_REALTY:
      return Object.assign({}, state, { giver: Object.assign({}, state.giver, { registered: false }) })
    case CREATED_GIVER_REALTY:
      return Object.assign({}, state, { giver: Object.assign({}, state.giver, { registered: true, items: state.giver.items.concat([action.realty]), lastUpdated: action.receivedAt }, action.realty) })
    case FETCHING_GIVER_REALTIES:
      return Object.assign({}, state, { giver: Object.assign({}, state.giver, { isFetching: true }) })
    case FETCHED_GIVER_REALTIES:
      return Object.assign({}, state, { giver: Object.assign({}, state.giver, { isFetching: false, deleted: false, items: action.realties }) })
    case DELETING_GIVER_REALTY:
      return Object.assign({}, state, { giver: Object.assign({}, state.giver, { deleted: false }) })
    case DELETED_GIVER_REALTY:
      return Object.assign({}, state, { giver: Object.assign({}, state.giver, { deleted: true, items: state.giver.items.filter(item => item.id !== action.realtyId), lastUpdated: action.receivedAt }) })
    case DISPLAY_CREATE_GIVER_REALTY_MODAL:
      return Object.assign({}, state, { giver: Object.assign({}, state.giver, { displayCreateModal: true }) })
    case HIDE_CREATE_GIVER_REALTY_MODAL:
      return Object.assign({}, state, { giver: Object.assign({}, state.giver, { displayCreateModal: false }) })
    case CREATING_RECEPTOR_REALTY:
      return Object.assign({}, state, { receptor: Object.assign({}, state.receptor, { registered: false }) })
    case CREATED_RECEPTOR_REALTY:
      return Object.assign({}, state, { receptor: Object.assign({}, state.receptor, { registered: true, items: state.receptor.items.concat([action.realty]), lastUpdated: action.receivedAt }, action.realty) })
    case FETCHING_RECEPTOR_REALTIES:
      return Object.assign({}, state, { receptor: Object.assign({}, state.receptor, { isFetching: true }) })
    case FETCHED_RECEPTOR_REALTIES:
      return Object.assign({}, state, { receptor: Object.assign({}, state.receptor, { isFetching: false, deleted: false, items: action.realties }) })
    case DELETING_RECEPTOR_REALTY:
      return Object.assign({}, state, { receptor: Object.assign({}, state.receptor, { deleted: false }) })
    case DELETED_RECEPTOR_REALTY:
      return Object.assign({}, state, { receptor: Object.assign({}, state.receptor, { deleted: true, items: state.receptor.items.filter(item => item.id !== action.realtyId), lastUpdated: action.receivedAt }) })
    case DISPLAY_CREATE_RECEPTOR_REALTY_MODAL:
      return Object.assign({}, state, { receptor: Object.assign({}, state.receptor, { displayCreateModal: true }) })
    case HIDE_CREATE_RECEPTOR_REALTY_MODAL:
      return Object.assign({}, state, { receptor: Object.assign({}, state.receptor, { displayCreateModal: false }) })
    default:
      return state
  }
}

