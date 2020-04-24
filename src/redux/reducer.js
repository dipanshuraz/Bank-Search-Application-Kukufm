import {
  FETCH_DATA_REQUEST,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_FAILED,
  FILTER_DATA,
  MARK_FAV_BANK
} from './action'


const initialState = {
  data: [],
  isLoading: false,
  error: '',
  page: 1,
  perPage: 10,
  favBanks: []
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
        data: payload
      }
    case FETCH_DATA_FAILED:
      return {
        ...state,
        error: payload
      }
    case FILTER_DATA:
      console.log(payload, 'filter')
      return {
        ...state
      }
    case MARK_FAV_BANK:
      console.log(payload)
      let arr = state.data.filter((elem) => elem.ifsc === payload)
      console.log(state.favBanks, 'arr')

      // arr = arr.filter((elem) => elem.ifsc != payload)

      return {
        ...state,
        favBanks: [...state.favBanks, ...arr]
      }
    default:
      return state
  }

}

export default reducer