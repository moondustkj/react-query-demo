import './App.css'
import CanvasBoard from './components/CanvasBoard'
import Posts from './components/Posts'
import { Route, Routes } from 'react-router-dom'
import Post from './components/Post'

function App() {

  return (
    // <div className='h-screen flex'>
    //   <div className="w-4/5 p-4">
    //     <h1 className="text-xl font-semibold mb-2">CollabBoard</h1>
    //     <CanvasBoard />
    //   </div>
    //   <div className="w-1/5 border-l p-4">
    //     <Participants />
    //     <Posts />
    //   </div>
    // </div>
    <Routes>
      {/* <Route path='/' element={<CanvasBoard />}></Route> */}
      <Route path='/posts' element={<Posts />}></Route>
      <Route path='/posts/:id' element={<Post />}></Route>
    </Routes>
  )
}

export default App
