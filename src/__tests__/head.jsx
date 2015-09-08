import assert from 'assert';
import Head from '../head';

/* globals describe, it */

describe('Head component', () => {
  var component = new Head();

  describe('#titleize', () => {
    it('should titleize a string properly', () => {
      assert.equal('Foo Bar', component.titleize('foo bar'));
    });

    it('should titleize a snake case string properly', () => {
      assert.equal('Foo Bar', component.titleize('foo_bar'));
    });

    it('should titleize a camel cased string properly', () => {
      assert.equal('Foo Bar', component.titleize('fooBar'));
    });

    it('should titleize a constantized string properly', () => {
      assert.equal('Foo Bar', component.titleize('FooBar'));
    });
  });
});
