import React from 'react';

import './App.scss';
import {HashRouter} from "react-router-dom";

import {Banner}from "./ui/components/Banner/Banner";
import {Header} from "./ui/components/Header/Header";

const App = () => (
    <HashRouter>
        <div className="App">
            <Header/>
            <Banner/>
        </div>
    </HashRouter>
)

export default App;
