import React from 'react';
import Navbar from "./components/Navbar";
import {BrowserRouter} from "react-router-dom";
import {Home} from "./components/Home";


function App() {
    return (
        <BrowserRouter>
            <Navbar/>
            <div className="container-fluid mt-4">
                <Home/>
            </div>
        </BrowserRouter>
    );
}

export default App;
