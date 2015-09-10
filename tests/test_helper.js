import React from 'react/addons';
import { expect } from 'chai';

let { TestUtils } = React.addons,
    shallowRenderer = TestUtils.createRenderer();

let createComponent = (component, props) => {
  return TestUtils.renderIntoDocument(React.createElement(component, props));
}

let createShallowComponent = (component, props) => {
  shallowRenderer.render(React.createElement(component, props));
  return shallowRenderer.getRenderOutput();
}

export {
  React,
  expect,
  TestUtils,
  createComponent,
  createShallowComponent
}
