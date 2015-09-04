import React from 'react'
import Head from './head'
import Rows from './rows'

export default class Table extends React.Component{
  render(){
    return(
      <table {...this.props}>
        <Head row={this.props.rows[0]}/>
        <Rows rows={this.props.rows} />
      </table>
    )
  }
}
