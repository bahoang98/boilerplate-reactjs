import React from 'react';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { PATH } from '../constants/paths';
import { DashboardScreen } from './dashboard';

export const MainRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={PATH.HOME} element={<DashboardScreen />} />
      </Routes>
    </BrowserRouter>
  );
};
