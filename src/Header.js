import React from 'react'
import { BrowserRouter, Link, Route } from 'react-router-dom'
import Form from "./Form";
import Home from "./Home"
import Logo from './Pizza.jpg'
import "./App.css";

function Header() {
    return (
        <div className="nav-links">
            <div className="navBar">
             <div className="link1">
                <BrowserRouter>
                    <Link to="/">Home</Link>
                </BrowserRouter>
             </div>
             <div className='link2'>
                <BrowserRouter>
                    <Link to="/Form">Order Now</Link>
                </BrowserRouter>
             </div>  
            </div>
            <h1>Lambda Eats</h1>
            <img src={Logo}/>
                <BrowserRouter>
                    <Route exact path="/">
                        <Home/>
                    </Route>
                </BrowserRouter>
                
                <BrowserRouter>
                    <Route path="/Form">
                        <Form/>
                    </Route>
                </BrowserRouter>
        </div>
    )
}

export default Header