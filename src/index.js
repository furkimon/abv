import React from 'react'
import ReactDOM from "react-dom";
import {StateProvider} from './reducer/StateProvider'
import reducer, {initialState} from './reducer/Reducer'
import App from './App.js'

ReactDOM.render(
    <StateProvider reducer={reducer} initialState={initialState}>
        <App/>
    </StateProvider>, document.getElementById('root'))