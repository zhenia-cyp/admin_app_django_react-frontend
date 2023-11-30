import React from 'react';
import './App.css';
import Nav from "./secure/components/Nav";
import Menu from "./secure/components/Menu";
import Dashboard from "./secure/dashboard/Dashboard";
import Users from "./secure/users/Users";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Login from "./public/Login";
import Register from "./public/Register";
import RedirectToDashbord from "./secure/RedirectToDashboard"

function App() {
  return (
    <div className="App">
               <BrowserRouter>
                 <Routes>
                      <Route path="/" element={<RedirectToDashbord/>}/>
                      <Route path="/dashboard/" element={<Dashboard/>}/>
                      <Route path="/get/users/" element={<Users/>}/>
                      <Route path="/login/" element={<Login/>}/>
                      <Route path="/register/" element={<Register/>}/>
                 </Routes>
               </BrowserRouter>
    </div>
);
}

export default App;
