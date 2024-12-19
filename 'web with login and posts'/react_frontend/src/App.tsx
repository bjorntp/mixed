import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/header'
import Signup from './components/signup'
import LoginComponent from './components/login';
import NewPost from './components/newPost';
import EditPost from './components/editPost';
import HomeComponent from './components/home';
import MyPostComponent from './components/myPosts';



function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Header />}>
            <Route path="" element={<HomeComponent />} />
            <Route path="signup" element={<Signup />} />
            <Route path="login" element={<LoginComponent />} />
            <Route path="new_post" element={<NewPost />} />
            <Route path="edit_post/:id" element={<EditPost />} />
            <Route path="my_posts" element={<MyPostComponent />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
