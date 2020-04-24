import {
  FETCH_DATA_REQUEST,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_FAILED,
  FILTER_DATA,
  MARK_FAV_BANK,
  FETCH_PERSISTED_DATA,
  CHANGE_PAGE_NO,
  SELECT_PAGE_SIZE
} from './action'


const initialState = {
  data: [],
  fullData: [],
  isLoading: false,
  error: '',
  favBanks: [],
  page: 1,
  perPage: 10,
  totalPages: 0
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
        data: payload,
        fullData: payload,
        totalPages: payload.length / state.perPage
      }
    case FETCH_DATA_FAILED:
      return {
        ...state,
        error: payload
      }
    case FILTER_DATA:
      if (payload === '') {

        return {
          ...state,
          data: state.fullData,
        }
      } else {
        let filteredData = state.data.filter((elem) => {
          return (
            elem.ifsc.toLowerCase().indexOf(payload) !== -1 ||
            elem.branch.toLowerCase().indexOf(payload) !== -1 ||
            elem.address.toLowerCase().indexOf(payload) !== -1 ||
            elem.city.toLowerCase().indexOf(payload) !== -1 ||
            elem.district.toLowerCase().indexOf(payload) !== -1 ||
            elem.state.toLowerCase().indexOf(payload) !== -1 ||
            elem.bank_name.toLowerCase().indexOf(payload) !== -1
          );
        });

        return {
          ...state,
          data: filteredData
        }
      }

    case MARK_FAV_BANK:

      localStorage.setItem('markFav', JSON.stringify(payload))

      return {
        ...state,
        favBanks: payload
      }
    case FETCH_PERSISTED_DATA:

      return {
        ...state,
        favBanks: JSON.parse(localStorage.getItem('markFav'))
      }
    case CHANGE_PAGE_NO:
      return {
        ...state,
        page: payload
      }
    case SELECT_PAGE_SIZE:

      return {
        ...state,
        perPage: Number(payload)
      }

    default:
      return state
  }

}

export default reducer