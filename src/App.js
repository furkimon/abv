import React from 'react'
import './assets/styles/App.css'
import { Home, Sidebar, Bottom } from './components'

const App = () => {
    return (
        <div className="app">
            <Sidebar />
            <Bottom />
            <div className="app__pages">
                <Home />
            </div>

        </div>
    )
}

export default App
