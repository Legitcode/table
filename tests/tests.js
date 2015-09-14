import React from 'react/addons';
import { expect } from 'chai';

let { TestUtils } = React.addons,
    shallowRenderer = TestUtils.createRenderer();


class Test {

  constructor(component){
    this.component = TestUtils.renderIntoDocument(component)
    this.middleware = []
    this.helpers = []
    return this
  }

  use(callback, data){
    this.middleware.push(callback.bind(this, data))
    return this
  }

  callMiddleware(){
    for (let middleware of this.middleware){
      middleware.call()
    }
  }

  end(callback) {
    this.callMiddleware()
    callback.call(this,this.component, this.helpers)
  }

}

export default function TestRapper(component, props){
  return new Test(component, props)
}
