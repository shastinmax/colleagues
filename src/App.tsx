import React from 'react';

import './App.scss';
import { HashRouter, Route, Routes, Navigate } from 'react-router-dom';

import { PathNavigation } from './enums/Navigation';
import { Banner } from './ui/components/Banner/Banner';
import { Form } from './ui/components/Form/Form';
import { Header } from './ui/components/Header/Header';
import { Users } from './ui/components/Users/Users';

import { PageNotFound } from 'ui/components/PageNotFound/PageNotFound';

const ROUTES = [
  { path: PathNavigation.BANNER, element: <Banner /> },
  { path: PathNavigation.USERS, element: <Users /> },
  { path: PathNavigation.FORM, element: <Form /> },
  { path: PathNavigation.PAGE_NOT_FOUND, element: <PageNotFound /> },
];

const App = () => (
  <HashRouter>
    <div className="App">
      <Header />

      <Routes>
        {ROUTES.map(({ path, element }) => (
          <Route key={path} path={path} element={element} />
        ))}
        <Route path="/*" element={<Navigate to={PathNavigation.PAGE_NOT_FOUND} />} />
      </Routes>
    </div>
  </HashRouter>
);

export default App;
