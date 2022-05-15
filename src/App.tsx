import React from 'react';

import './App.scss';
import {HashRouter} from "react-router-dom";

import {Header} from "./ui/components/Header/Header";

const App = () => (
    <HashRouter>
        <div className="App">
            <Header/>
        </div>
    </HashRouter>
)

export default App;
