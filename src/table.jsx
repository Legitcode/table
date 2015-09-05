import React from 'react'
import Head from './head'
import Rows from './rows'

export default class Table extends React.Component{
  render(){
    let { rows, ...attributes } = this.props

    return (
      <table {...attributes}>
        <Head row={rows[0]} />
        <Rows rows={rows} />
      </table>
    )
  }
}
