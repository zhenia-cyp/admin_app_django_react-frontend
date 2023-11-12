import React from 'react';
import './App.css';
import Nav from "./secure/components/Nav";
import Menu from "./secure/components/Menu";
import Dashboard from "./secure/Dashboard";
import Users from "./secure/Users";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Login from "./public/Login";

function App() {
  return (
    <div className="App">
               <BrowserRouter>
                 <Routes>
                      <Route path="/" element={<Dashboard/>}/>
                      <Route path="/users" element={<Users/>}/>
                      <Route path="/login" element={<Login/>}/>
                 </Routes>
               </BrowserRouter>
    </div>
);
}

export default App;
