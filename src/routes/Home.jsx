import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchData, filterData, fetchPersistedData } from '../redux/action'
import Table from '../components/Table'
import debounce from 'react-debouncing';
import FavBankTable from '../components/FavBankTable'
import Pagination from '../components/Pagination'

export class Home extends Component {
  constructor(props) {
    super(props)

    this.state = {
      search: '',
    }
  }

  componentDidMount() {
    const { fetchPersistedData } = this.props
    fetchPersistedData()
  }

  searchInputHandle = debounce((e) => {
    const { filterData } = this.props
    filterData(e.target.value)
  }, 400);

  citySelect = (e) => {
    const { fetchData } = this.props
    fetchData(e.target.value)
  }

  render() {
    const { data, favBanks, isLoading } = this.props

    return (
      <div className='container-fluid'>
        <h1>Bank Branches</h1>
        <div className="row">
          <div className="col-md-6">
            <select class="form-control" name="City" id="" onChange={this.citySelect}>
              <option value="">Select City</option>
              <option value="MUMBAI">Mumbai</option>
              <option value="DELHI">Delhi</option>
              <option value="KOLKATA">Kolkata</option>
              <option value="KANPUR">Kanpur</option>
              <option value="PATNA">Patna</option>
            </select>
          </div>

          <div className="col-md-6">

            <input class="form-control" type="search" name="" id="" placeholder='Search' onKeyUp={this.searchInputHandle} />

          </div>
        </div>
        <div className="row d-flex justify-content-center align-items-center">
          <div className="col-md-12">

            {isLoading ? <img src="loading.gif" alt="" /> : ''}
            {favBanks && favBanks.length ? <FavBankTable /> : ""}
            {data && data.length ? <Table /> : null}
            <Pagination />
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  data: state.data,
  favBanks: state.favBanks,
  isLoading: state.isLoading
})

const mapDispatchToProps = dispatch => ({
  fetchData: (payload) => dispatch(fetchData(payload)),
  filterData: (payload) => dispatch(filterData(payload)),
  fetchPersistedData: () => dispatch(fetchPersistedData())
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)
