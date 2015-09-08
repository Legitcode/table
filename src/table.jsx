import React from 'react'
import Head from './head'
import Rows from './rows'

export default class Table extends React.Component{
  render(){
    let { rows, capitalize, ...attributes } = this.props

    return (
      <table {...attributes}>
        <Head row={rows[0]} capitalize={capitalize} />
        <Rows rows={rows} />
      </table>
    )
  }
}
