import React from 'react';

import './App.scss';
import {HashRouter, Route, Routes} from "react-router-dom";

import {PATH} from "./common/enums/patch";
import {Banner} from "./ui/components/Banner/Banner";
import {Form} from "./ui/components/Form/Form";
import {Header} from "./ui/components/Header/Header";
import {Users} from "./ui/components/Users/Users";

const App = () => (
    <HashRouter>
        <div className="App">
            <Header/>
            <Routes>
                <Route path={PATH.BANNER} element={<Banner/>}/>
                <Route path={PATH.USERS} element={<Users/>}/>
                <Route path={PATH.FORM} element={<Form/>}/>
                <Route path='/*' element={<div>ERROR</div>}/>

            </Routes>
        </div>
    </HashRouter>
)

export default App;
