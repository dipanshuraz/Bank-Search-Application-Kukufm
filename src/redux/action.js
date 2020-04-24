import axios from 'axios'

export const FETCH_DATA_REQUEST = 'FETCH_DATA_REQUEST'
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS'
export const FETCH_DATA_FAILED = 'FETCH_DATA_FAILED'

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

  // const cities = [];
  // cities.push(payload)

  // localStorage.setItem('cities', JSON.stringify(cities));
  // var localStorageCIties = localStorage.getItem('cities');
  // console.log(JSON.parse(localStorageCIties));

  localStorage.setItem('city', [])
  let getCities = localStorage.getItem('city')


  dispatch(fetchDataRequest())
  return axios.get("https://vast-shore-74260.herokuapp.com/banks?city=" + payload)
    .then(res => {
      console.log(res.data)
    })
    .catch(err => console.log(err.message))
}