
import NavBar from "components/NavBar"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NotFoundPage from 'pages/NotFoundPage'
import Home from 'pages/Home'
import Footer from 'components/Footer'
import LogIn from "pages/LogIn"
  
function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Routes>
            <Route path="*" element={<NotFoundPage />} />
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<LogIn/>}/>
          </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App
