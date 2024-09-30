import React from 'react';
import ReactDOM from 'react-dom/client';

import reportWebVitals from './reportWebVitals';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Mylandingpage from "./modules/dashboard/Mylandingpage"
import Mymainpage from "./modules/dashboard/Mymainpage"
import "./css/Myheaderpage.css"
import "./css/Mymainpage.css"
import "./css/Myloginpage.css"
import "./css/Myregistorpage.css"
import 'react-toastify/dist/ReactToastify.css';
import Myregistorpage from "./modules/auth/Myregistorpage"
import Myloginpage from './modules/auth/Myloginpage';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path='' element={<Mylandingpage/>} />
      <Route path='/Mymainpage' element={<Mymainpage/>}/>
      <Route path='/Myloginpage' element={<Myloginpage/>}/>
      <Route path='/Myregistorpage' element={<Myregistorpage/>}/>

    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
