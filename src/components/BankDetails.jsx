import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'

export class BankDetails extends Component {
  constructor(props) {
    super(props)

    this.state = {

    }
  }

  componentDidMount = () => {
    const { fullData, match: { params } } = this.props
    // var bank = this.props.match.params.bankId;

    console.log(params.bankId, 'dynamic')

    let filterData = fullData.filter((elem) => elem.ifsc === params.bankId)

    this.setState({ data: filterData }, () => console.log(this.state.data, 'filter data bank detail'))
  }

  render() {
    const { data } = this.state
    return (
      <div className='container parent'>
        <Link to='/' className='my-5 text-dark'><i class="fa-3x fas fa-arrow-left"></i></Link>
        {data && data.map((elem) => {

          return (
            <div className='child'>

              <h1>IFSC CODE : {elem.ifsc}</h1>
              <h2>BANK NAME : {elem.bank_name}</h2>
              <h2>BRANCH : {elem.branch}</h2>
              <h2>ADDRESS : {elem.address}</h2>
              <h2>CITY : {elem.city}</h2>
              <h2>DISTRICT : {elem.district}</h2>
              <h2>STATE : {elem.state}</h2>
            </div>
          )
        })}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  fullData: state.fullData
})


export default connect(mapStateToProps, null)(BankDetails)
