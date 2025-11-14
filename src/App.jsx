import './App.css'
import CanvasBoard from './components/CanvasBoard'
import Posts from './components/Posts'
import { Route, Routes, Navigate } from 'react-router-dom'
import Post from './components/Post'

function App() {

  return (
    <Routes>
      <Route path="/" element={<Navigate to="/posts" replace />} />
      <Route path='/posts' element={<Posts />}></Route>
      <Route path='/posts/:id' element={<Post />}></Route>
    </Routes>
  )
}

export default App
