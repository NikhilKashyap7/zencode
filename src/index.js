import React from 'react';
import ReactDOM from 'react-dom/client';

import reportWebVitals from './reportWebVitals';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Mylandingpage from "./modules/dashboard/Mylandingpage"
import Mymainpage from "./modules/dashboard/Mymainpage"
import "./css/Myheaderpage.css"
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path='' element={<Mylandingpage/>} />
      <Route path='/Mymainpage' element={<Mymainpage/>}/>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
