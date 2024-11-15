import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/header'
import Signup from './components/signup'
import LoginComponent from './components/login';
import NewPost from './components/newPost';
import EditPost from './components/editPost';



function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Header />}>
            <Route path="signup" element={<Signup />} />
            <Route path="login" element={<LoginComponent />} />
            <Route path="new_post" element={<NewPost />} />
            <Route path="edit_post" element={<EditPost />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
