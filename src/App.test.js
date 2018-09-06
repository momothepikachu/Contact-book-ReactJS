import React from 'react';
import ReactDOM from 'react-dom';
import {shallow, render} from 'enzyme'
import App from './App';
import ListContacts from './ListContacts'
import { XMLHttpRequest } from 'xmlhttprequest';
import { expect } from 'chai';
import sinon from 'sinon';

global.XMLHttpRequest = XMLHttpRequest;


it('renders without crashing', () => {
  // const div = document.createElement('div');
  const wrapper = render(<App />)
  expect(wrapper)
  // ReactDOM.render(<App />, div);
  // ReactDOM.unmountComponentAtNode(div);
});

it('testing enzyme shallow wrapper', ()=>{
	const wrapper = shallow(<App />);
	const welcome = <h2> Welcome to React </h2>
	expect(wrapper.contains(welcome)).equal(false);
})

// it('testing enzyme shallow wrapper', ()=>{
// 	const wrapper = shallow(<App />);
// 	expect(wrapper.find(ListContacts)).to.have.length(1);
// })