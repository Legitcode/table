import React from 'react'
import Head from './head'
import Rows from './rows'

export default class Table extends React.Component{
  render(){
    let { rows, skipId, ...attributes } = this.props,
        headerRow = rows[0];
        
    return (
      <table {...attributes}>
        <Head row={headerRow} skipId={skipId} />
        <Rows rows={rows} skipId={skipId} />
      </table>
    )
  }
}
