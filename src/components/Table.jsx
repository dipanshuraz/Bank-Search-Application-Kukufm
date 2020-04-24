import React from 'react'
import { connect } from 'react-redux'

function Table(props) {
  const { data } = props
  console.log(data, 'hello')
  return (
    <div>
      <table class="table">
        <thead class="thead-dark">
          <tr>
            <th scope="col">Ifsc</th>
            <th scope="col">bank_name</th>
            <th scope="col">Branch</th>
            <th scope="col">address</th>
            <th scope="col">City</th>
            <th scope="col">district</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>Mark</td>
            <td>Mark</td>
            <td>Mark</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
const mapStateToProps = (state) => ({
  data: state.data
})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Table)
