import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/home/Home'
import About from './pages/about/About'


function App() {


  return (
    <>
     <Router basename='/File-Converter/'>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
        </Routes>
     </Router>
    </>
  )
}

export default App
