
import NavBar from "components/NavBar"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NotFoundPage from 'pages/NotFoundPage'
import Home from 'pages/Home'
import Footer from 'components/Footer'
import LogIn from "pages/LogIn"
import SignUp from "pages/SignUp"
import RoutePage from 'pages/RoutePage'
  
function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Routes>
            <Route path="*" element={<NotFoundPage />} />
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<LogIn/>}/>
            <Route path="/signup" element={<SignUp/>}/>
          </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App
