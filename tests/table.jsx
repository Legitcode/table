import Test from 'legit-tests';
import Table from '../src/table';
import Head from '../src/head';
import Rows from '../src/rows';
import { expect } from 'chai';

/* globals describe, it */

describe('Table component', () => {
  var table = new Table({ rows: [] });

  describe('#render', () => {
    it('should not render the component if the rows are empty', () => {
      Test(<Table rows={[]}/>, {shallow: true})
      .test(({component}) => {
        expect(component).to.be.null;
      })
    });

    it('should render the header and rows if the rows are not empty', () => {
      let rows = [{foo: "1"}]

      Test(<Table rows={rows}/>, {shallow: true})
      .test(({component}) => {
        let head = component.props.children[0],
          tableRows = component.props.children[1];

        expect(head.props).to.not.be.undefined;
        expect(tableRows.props).to.not.be.undefined;
        expect(head.props.row).to.equal(rows[0]);
        expect(tableRows.props.rows).to.equal(rows);
      })
    });

    it('should correctly modify row', () => {
      let modify = (name) => {
        return `Name: ${name}`
      }

      Test(<Table rows={[{name: 'zach'}]} modify={{name: modify}}/>)
      .find('td')
      .test(({helpers}) => {
        expect(helpers.elements.td.props.children).to.be.equal('Name: zach')
      })
    })
  });
});
