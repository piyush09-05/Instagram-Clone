import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from '../HomePage/HomePage';
import Sidebar from '../../Components/Sidebar/Sidebar';
import Profile from '../Profile/Profile'


const Router = () => {
    return (
      <div style={{ display: 'flex' }}>
        <div style={{ width: '20%'}}>
          <Sidebar />
        </div>
  
        <div style={{marginLeft: '5%', width:'100%', height:'100vh'}}>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/username' element={<Profile />} />
          </Routes>
        </div>
      </div>
    );
  }
  



export default Router;
