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

  render() {
    return (
      <Table className="table table-bordered" rows={rows} />
    );
  }
}

React.render(<Basic />, document.getElementById('react'));
