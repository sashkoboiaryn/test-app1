import React from "react";
import MainContainer from "./MainContainer"; 
import Profile from "../components/ProfileComponent";
import NotFound from "../components/NotFoundComponent";
import { Routes, Route } from 'react-router-dom';

import {MenuAppBar} from '../components/AppBarComponent'

const App: React.FC = () => {
   
  return (
    <>
      <Routes>
        <Route path='/' element={<MenuAppBar />}> 
          <Route 
            index
            element={<MainContainer/>}/>     
          <Route 
            path='profile'
            element={<Profile/>}     
          />
          <Route
            path='*'
            element={<NotFound/>}/>          
        </Route>
      </Routes>                         
    </>
  );
}

export default App;