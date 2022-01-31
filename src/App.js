
import NavBar from "components/NavBar"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NotFoundPage from 'pages/NotFoundPage'
import Home from 'pages/Home'
import Footer from 'components/Footer'
import LogIn from "pages/LogIn"
import SignUp from "pages/SignUp"
import RoutePage from 'pages/RoutePage'
import Dashboard from "pages/Dashboard"
  
function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Routes>
            <Route path="/login" element={<LogIn/>}/>
            <Route path="/signup" element={<SignUp/>}/>

            <Route path="*" element={<NotFoundPage />} />
            <Route path="/" element={<Home />} />
            <Route path="/routes" element={<RoutePage/>} />
            <Route path="/profile" element={<Dashboard/>}/>
          
          </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App
