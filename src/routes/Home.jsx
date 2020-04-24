import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchData, filterData } from '../redux/action'
import Table from '../components/Table'
import debounce from 'react-debouncing';

export class Home extends Component {
  constructor(props) {
    super(props)

    this.state = {
      search: '',
    }
  }

  searchInputHandle = debounce((e) => {
    const { filterData } = this.props
    filterData(e.target.value)
  }, 400);

  citySelect = (e) => {
    const { fetchData } = this.props
    // console.log(e.target.value)
    fetchData(e.target.value)
  }

  render() {
    const { data } = this.props
    console.log(data, 'homepage')
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
            <label htmlFor="">Search</label>
            <input class="form-control" type="search" name="" id="" onKeyUp={this.searchInputHandle} />

          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <Table />
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  data: state.data
})

const mapDispatchToProps = dispatch => ({
  fetchData: (payload) => dispatch(fetchData(payload)),
  filterData: (payload) => dispatch(filterData(payload))
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)
