import React from 'react'
import { connect } from 'react-redux'
import { markFavBank } from '../redux/action'

function Table(props) {
  const { data, markFavBank, page, perPage } = props
  console.log(data, 'hello')
  console.log(perPage, "perPage")
  return (
    <div className=''>
      <h1>Banks</h1>
      <table class="table table-responsive">
        <thead class="thead-dark">
          <tr>

            <th scope="col">no.</th>
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

            return (<tr onClick={() => markFavBank(elem.ifsc)} key={elem.ifsc}>
              <th scope="row">{i + 1}</th>
              <td>{elem.ifsc}</td>
              <td>{elem.bank_name}</td>
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
const mapStateToProps = (state) => ({
  page: state.page,
  data: state.data,
  perPage: state.perPage
})

const mapDispatchToProps = dispatch => ({
  markFavBank: payload => dispatch(markFavBank(payload)),

})

export default connect(mapStateToProps, mapDispatchToProps)(Table)
