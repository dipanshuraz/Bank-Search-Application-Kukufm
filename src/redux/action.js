import axios from 'axios'

export const FETCH_DATA_REQUEST = 'FETCH_DATA_REQUEST'
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS'
export const FETCH_DATA_FAILED = 'FETCH_DATA_FAILED'
export const FILTER_DATA = 'FILTER_DATA'

export const fetchDataRequest = (payload) => ({
  type: FETCH_DATA_REQUEST,
  payload
})

export const fetchDataSuccess = (payload) => ({
  type: FETCH_DATA_SUCCESS,
  payload
})

export const fetchDataFailed = (payload) => ({
  type: FETCH_DATA_FAILED,
  payload
})

export const fetchData = (payload) => dispatch => {
  dispatch(fetchDataRequest())
  let res = findLocalItems(payload)

  if (res) {
    var localStorageCItiesBank = localStorage.getItem(payload);
    let data = JSON.parse(localStorageCItiesBank)
    // console.log(JSON.parse(localStorageCItiesBank), 'local');
    // passing data from localstorage
    dispatch(fetchDataSuccess(data))
    // console.log('local')
  } else {
    return axios.get("https://vast-shore-74260.herokuapp.com/banks?city=" + payload)
      .then(res => {
        dispatch(fetchDataSuccess(res.data))
        localStorage.setItem(payload, JSON.stringify(res.data))
        // console.log(res.data, 'function dispatch')
      })
      .catch(err => console.log(err.message))
  }
}

export const filterData = (payload) => ({
  type: FILTER_DATA,
  payload
})


// function to query in localstorage
const findLocalItems = query => {
  for (let key in localStorage) {
    if (key === query && typeof key === 'string') {
      return key
    }
  }
  return 0
}
