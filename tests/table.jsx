import {
  React,
  expect,
  TestUtils,
  createComponent,
  createShallowComponent
} from './test_helper';

import Table from '../src/table';
import Head from '../src/head';
import Rows from '../src/rows';
import Test from './tests'
/* globals describe, it */

describe('Table component', () => {
  var table = new Table({ rows: [] });

  describe('#render', () => {
    it('should not render the component if the rows are empty', () => {
      let table = createShallowComponent(Table, { rows: [] });

      expect(table).to.be.null;
    });

    it('should render the header and rows if the rows are not empty', () => {
      let rows = [{foo: "1"}],
          table = createShallowComponent(Table, { rows: rows });

      let head = table.props.children[0],
          tableRows = table.props.children[1];

      expect(head.props).to.not.be.undefined;
      expect(tableRows.props).to.not.be.undefined;
      expect(head.props.row).to.equal(rows[0]);
      expect(tableRows.props.rows).to.equal(rows);
    });
  });
});

class TestComponent extends React.Component {
  constructor(){
    super()
    this.state = {}
  }

  render(){
    return <div>{this.state.test}</div>
  }
}

function modifyState(state){
  this.component.setState(state)
}

function grabElements(selector){
  let elements = TestUtils.scryRenderedDOMComponentsWithTag(this.component,'div')
  this.helpers[selector] = elements
}

Test(<TestComponent/>)
.use(modifyState, {test: 'test'})
.use(grabElements, 'div') // {class: 'class'}
.end((component, helpers) => {
  expect(helpers.div[0].props.children).to.be.equal('test')
})
