import React, { Component } from 'react'
import { connect } from 'react-redux';

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
      <div>
        {data && data.map((elem) => {
          return (
            <div>
              <h1>{elem.ifsc}</h1>
              <h1>{elem.bank_name}</h1>
              <h2>{elem.branch}</h2>
              <h2>{elem.address}</h2>
              <h2>{elem.city}</h2>
              <h2>{elem.district}</h2>
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
