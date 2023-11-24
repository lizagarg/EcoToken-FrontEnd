import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Login from './components/login';
import GovtDashboard from './components/dashboards/govtDashboard';
import IndustryDashboard from './components/dashboards/industryDashboard';
import CleanDashboard from './components/dashboards/cleanDashboard';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>
  },
  // login page
  {
    path: "login",
    element: <Login></Login>
  },
  //dashboards
  {
    path: "government",
    element: <GovtDashboard></GovtDashboard>
  },
  {
    path: "industry",
    element: <IndustryDashboard></IndustryDashboard>
  },
  {
    path: "cleanEnergyProducers",
    element: <CleanDashboard></CleanDashboard>
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();
