import React from 'react';

import './App.scss';
import { HashRouter, Route, Routes, Navigate } from 'react-router-dom';

import { PathNavigation } from './common/enums/Navigation';
import { Banner } from './ui/components/Banner/Banner';
import { Form } from './ui/components/Form/Form';
import { Header } from './ui/components/Header/Header';
import { Users } from './ui/components/Users/Users';

import { PageNotFound } from 'ui/components/PageNotFound/PageNotFound';

const App = () => (
  <HashRouter>
    <div className="App">
      <Header />
      <Routes>
        <Route path={PathNavigation.BANNER} element={<Banner />} />
        <Route path={PathNavigation.USERS} element={<Users />} />
        <Route path={PathNavigation.FORM} element={<Form />} />
        <Route path={PathNavigation.PAGE_NOT_FOUND} element={<PageNotFound />} />
        <Route path="/*" element={<Navigate to={PathNavigation.PAGE_NOT_FOUND} />} />
      </Routes>
    </div>
  </HashRouter>
);

export default App;
