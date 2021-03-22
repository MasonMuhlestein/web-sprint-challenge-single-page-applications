import React from 'react'
import Form from "./Form"
import { BrowserRouter, Link, Route } from "react-router-dom";

function Home() {
    return (
        <div className="Homelink">
            <BrowserRouter>
                <Link to="/Form">
                    <button onClick={(evt)=> evt.preventDefault}>Pizza!</button>
                </Link>
            </BrowserRouter>
            <BrowserRouter>
                <Route path="/Form">
                    <Form />
                </Route>
            </BrowserRouter>
        </div>
    )
}

export default Home