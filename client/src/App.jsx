import { useState } from 'react'
import {Routes, Route} from 'react-router-dom'
import PostForm from './views/PostForm'
import AllPosts from './views/AllPosts'
import PostInfo from './views/PostInfo'
import './App.css'

function App() {


  return (
    <>
    <Routes>
      <Route path={'/post/form'} element={<PostForm/>}/>
      <Route path={'/dashboard'} element={<AllPosts/>}/>
      <Route path={'/post/info'} element={<PostInfo/>}/>
    </Routes>
    </>
  )
}

export default App
