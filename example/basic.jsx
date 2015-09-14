import React from 'react';
import Table from '../src/table';

var rows = [
  {
    id: 1,
    name: 'Zach',
    job: 'coding'
  },
  {
    id: 2,
    name: 'Jed',
    job: 'Being a boss'
  }
];

export default class Basic extends React.Component {
  modifyId(id){
    return `the user's is ${id}`
  }
  render() {
    return (
      <Table
      className="table table-bordered"
      rows={rows}
      modify={{
        id: this.modifyId
      }}/>
    );
  }
}

React.render(<Basic />, document.getElementById('react'));
