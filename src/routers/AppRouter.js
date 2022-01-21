import React, { Component } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Container from '../container/Container';
import Navbar from '../components/Navbar';
import Usuarios from '../components/Usuarios';

export default class AppRouter extends Component {
    render() {
        return (
                 <BrowserRouter>
                     <Navbar/>
                    <Routes>
                       <Route path="/" element={<Container/>}/>
                       <Route path="/usuario" element={<Usuarios/>}/> 
                       <Route path="*" element={<Navigate to="/" />}/>
                   </Routes>
                </BrowserRouter>
          
        )

    }
}