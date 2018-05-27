import React from 'react'
import ReactDOM from 'react-dom';

import { createStore } from 'redux'
import { Provider, connect } from 'react-redux'

const SomeComponent = ({dispatch}) => (
    <button onClick={e => {
        dispatch({type: 'some action'})
    }}>Some Button</button>
)

const SomeContainer =
    connect()(SomeComponent)



const someReducer = (state =
                         {someDefaultProperty: 'some state'}, action) => {
    switch (action.type) {
        case 'some action':
            alert('Some action was dispatch')
            return {someStateAttribute:
                    'some new state'}
        default: return state
    }
}


const someStore =
    createStore(someReducer)

const SomeApp = () => (
    <Provider store={someStore}>
        <SomeContainer />
    </Provider>
)


ReactDOM.render(
    <SomeApp/>,
    document.getElementById('root')
);
