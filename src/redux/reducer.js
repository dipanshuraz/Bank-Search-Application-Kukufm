import {
  FETCH_DATA_REQUEST,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_FAILED,
  FILTER_DATA,
  MARK_FAV_BANK,
  FETCH_PERSISTED_DATA,
  CHANGE_PAGE_NO
} from './action'


const initialState = {
  data: [],
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
        totalPages: payload.length / state.perPage
      }
    case FETCH_DATA_FAILED:
      return {
        ...state,
        error: payload
      }
    case FILTER_DATA:
      console.log(payload, 'filter')

      let filteredData = state.data.filter((elem) => {
        return (
          elem.ifsc.indexOf(payload) !== -1 ||
          elem.branch.indexOf(payload) !== -1 ||
          elem.address.indexOf(payload) !== -1 ||
          elem.city.indexOf(payload) !== -1 ||
          elem.district.indexOf(payload) !== -1 ||
          elem.state.indexOf(payload) !== -1 ||
          elem.bank_name.indexOf(payload) !== -1
        );
      });
      console.log(filteredData, 'filtered Now Woeking');

      return {
        ...state
      }
    case MARK_FAV_BANK:
      console.log(payload)
      let arr = state.data.filter((elem) => elem.ifsc === payload)
      let setArr = [...arr, ...state.favBanks || []]

      localStorage.setItem('markFav', JSON.stringify(setArr))
      // console.log(JSON.parse(localStorage.getItem('markFav')))

      // arr = arr.filter((elem) => elem.ifsc != payload)

      return {
        ...state,
        favBanks: setArr
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
    default:
      return state
  }

}

export default reducer