import React, { Component } from 'react'
import { connect } from 'react-redux'
import { markFavBank } from '../redux/action'
import CheckBox from '../components/CheckBox'
import { Link } from 'react-router-dom'

export class Table extends Component {
  constructor(props) {
    super(props)

    this.state = {
      data: []
    }
  }

  componentDidMount() {
    const { data } = this.props
    this.setState({ data: data })
  }

  handleCheckBox = (e) => {

    const { data } = this.state
    let dataCopy = data
    dataCopy.forEach((elem) => {
      if (elem.ifsc === e.target.value) {
        elem.isChecked = e.target.checked
      }
    })
    this.setState({ data: dataCopy })
    let filterChecked = data.filter((elem) => {
      return elem.isChecked == true
    })
    this.props.markFavBank(filterChecked)
  }
  render() {
    const { data, page, perPage } = this.props

    return (
      <div className=''>
        <h1>Banks</h1>
        <table class="table table-responsive">
          <thead class="thead-dark">
            <tr>

              <th scope="col">no.</th>
              <th scope="col">Mark Fav.</th>
              <th scope="col">Ifsc</th>
              <th scope="col">bank_name</th>
              <th scope="col">Branch</th>
              <th scope="col">address</th>
              <th scope="col">City</th>
              <th scope="col">district</th>

            </tr>
          </thead>
          <tbody>
            {data && data.filter((a, i) => i >= perPage * (page - 1) && i < perPage * page).map((elem, i) => {

              return (<tr key={elem.ifsc}>
                <th scope="row">{i + 1}</th>
                <td><CheckBox handleCheckBox={this.handleCheckBox} key={elem.ifsc} {...elem} /></td>
                <td>{elem.ifsc}</td>
                <td><Link to={`/bank/${elem.ifsc}`}>{elem.bank_name}</Link></td>
                <td>{elem.branch}</td>
                <td>{elem.address}</td>
                <td>{elem.city}</td>
                <td>{elem.district}</td>
              </tr>)
            })}
          </tbody>
        </table>
      </div >
    )
  }
}

const mapStateToProps = (state) => ({
  page: state.page,
  data: state.data,
  perPage: state.perPage
})

const mapDispatchToProps = dispatch => ({
  markFavBank: payload => dispatch(markFavBank(payload)),

})

export default connect(mapStateToProps, mapDispatchToProps)(Table)
