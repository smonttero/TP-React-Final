import { Route, Routes } from 'react-router-dom'
import Canvas from './components/Canvas'
import Home from './pages/Home'
import Principal from './pages/Principal'

function App() {
  return (
    <Routes>
      <Route path='/' element ={<Home/>}/>
      <Route path='/principal' element={<Principal/>}/>
    </Routes>
  )
}

export default App
