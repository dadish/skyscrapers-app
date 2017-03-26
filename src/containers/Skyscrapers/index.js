import React from 'react'
import { createStructuredSelector } from 'reselect'
import { connect } from 'react-redux'
import Filter from './Filter'
import List from './List'
import Map from './Map'
import Summary from './Summary'
import { selectGridColumns } from './selectors'

const SkyscrapersComponent = ({ columns }) => {
  const style = {
    paddingTop: '1rem',
    paddingRight: '1rem',
    paddingBottom: '1rem',
    paddingLeft: '1rem',
  };
  if (columns === 2) style.paddingRight = '50%'
  if (columns === 1) style.paddingTop = '3rem'
  return (
    <div style={style} >
      {columns === 1 && <Summary fixed />}
      <Filter />
      <List />
      {columns === 2 && <Map />}
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  columns: selectGridColumns(),
})

export default connect(mapStateToProps)(SkyscrapersComponent);