import React from 'react'
import { connect } from 'react-redux'
import { changePage, selectPageSize } from '../redux/action'




function Pagination({ page, perPage, selectPageSize, totalPages, changePage }) {

  const changePageSize = (e) => {
    selectPageSize(e.target.value)
  }

  const pageList = []
  for (let i = page - 1; i >= 0 && i <= page + 3 && i <= totalPages; i++) {
    if (i === page - 1) {
      if (i !== 0)
        pageList.push(<li className="page-link" key={i} onClick={() => changePage(page - 1)}>Previous</li>)
      continue;
    }
    if (i === page + 3) {
      pageList.push(<li className=" page-link" key={i} onClick={() => changePage(page + 1)}>Next</li>)
      continue;
    }
    pageList.push(<li className="page-link" key={i} style={{ color: `${page === i ? 'green' : 'black'}` }} onClick={() => changePage(i)}>{i}</li>)
  }

  return (
    <div className="row">
      <nav className='col-md-6' aria-label="Page navigation example">
        <ul className='pagination'>
          {totalPages !== 0 && pageList}

        </ul>

      </nav>
      <div className="col-md-6">
        {totalPages !== 0 && (
          <select class="form-control d-inline" onChange={changePageSize}>
            <option value='10'>Select Page Size Default : 10</option>
            <option value='10'>10</option>
            <option value='20'>20</option>
            <option value='30'>30</option>
            <option value='40'>40</option>
            <option value='50'>50</option>
          </select>
        )}</div>
    </div>

  )
}
const mapStateToProps = (state) => ({
  page: state.page,
  perPage: state.perPage,
  totalPages: state.totalPages
})

const mapDispatchToProps = dispatch => ({
  changePage: (payload) => dispatch(changePage(payload)),
  selectPageSize: (payload) => dispatch(selectPageSize(payload))
})

export default connect(mapStateToProps, mapDispatchToProps)(Pagination)
