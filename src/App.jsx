import './App.css'
import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Dashboard from './pages/Dashboard'
import Data from './pages/Data'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path='/data' element={<Data />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
