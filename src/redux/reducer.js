import {
  FETCH_DATA_REQUEST,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_FAILED
} from './action'


const initialState = {
  data: [],
  isLoading: false,
  error: ''
}

const reducer = (state = initialState, action) => {
  const { payload, type } = action
  switch (type) {
    case FETCH_DATA_REQUEST:
      return {
        ...state,
        isLoading: true,
      }
    case FETCH_DATA_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: [...state.data, ...payload]
      }
    case FETCH_DATA_FAILED:
      return {
        ...state,
        error: payload
      }
    default:
      return state
  }

}


export default reducer