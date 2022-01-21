import React, { Component } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Container from '../container/Container';

export default class AppRouter extends Component {
    render() {
        return (
                 <HashRouter>
                   <Routes>
                       <Route path="/" element={<Container/>}/>
                   </Routes>
                </HashRouter>
          
        )

    }
}