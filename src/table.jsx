import React from 'react'
import Head from './head'
import Rows from './rows'

export default class Table extends React.Component{
  static propTypes = {
    rows: React.PropTypes.array.isRequired,
    capitalize: React.PropTypes.bool
  }

  render() {
    let { rows, capitalize, ...attributes } = this.props,
        header, tableRows;
    
    if (rows.length > 0) {
      header = <Head row={rows[0]} capitalize={capitalize} />;
      tableRows = <Rows rows={rows} />;
    }

    return (
      <table {...attributes}>
        { header }
        { tableRows }
      </table>
    )
  }
}
