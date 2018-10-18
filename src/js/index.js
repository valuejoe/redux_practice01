import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux'

const reducer = (state='', action) => {
	if(action.type='pps'){
		return {index: action.index}
	}
};
const init_state = {index : 1};

let store = createStore(reducer, init_state );

const action_01 = {
	type:'pps',
	index:100
};

function addvalue(value){
	return{
		type: 'ADD_value',
		index: value
	}
};

store.dispatch(addvalue(100))
console.log(store.getState())
store.dispatch(addvalue(10))
console.log(store.getState())
render( 
	<div>hello world ouo/</div>,
	document.getElementById('app')
);

