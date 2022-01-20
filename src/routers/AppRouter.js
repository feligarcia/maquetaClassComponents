import React, { Component } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Container from '../container/Container';

export default class AppRouter extends Component {
    render() {
        return (
                 <BrowserRouter>
                   <Routes>
                       <Route path="/" element={<Container/>}/>
                   </Routes>
                </BrowserRouter>
          
        )

    }
}