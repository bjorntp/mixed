import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/header'
import Signup from './components/signup'
import LoginComponent from './components/login';


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Header />}>
            <Route path="signup" element={<Signup />} />
            <Route path="login" element={<LoginComponent />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
