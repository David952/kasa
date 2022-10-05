import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Header from './components/Header'
 
ReactDOM.render(
    <React.StrictMode>
        <Router>
            <Header />
            <Route exact path="/">
                <Home />
            </Route>
            <Route path="/about">
                <About />
            </Route>
        </Router>
    </React.StrictMode>,
document.getElementById('root')
)