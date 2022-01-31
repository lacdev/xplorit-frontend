
import NavBar from "components/NavBar"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NotFoundPage from 'pages/NotFoundPage'
import Home from 'pages/Home'
import Footer from 'components/Footer'
import LogIn from "pages/LogIn"
import SignUp from "pages/SignUp"
import RoutePage from 'pages/RoutePage'
import Dashboard from "pages/Dashboard"
import PageLayout from "PageLayout"
  
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<LogIn/>}/>
          <Route path="/signup" element={<SignUp/>}/>
        </Routes>
          <Routes>
            <Route path="/" element={<PageLayout/>}>
              <Route path="*" element={<NotFoundPage />} />
              <Route index element={<Home />} />
              <Route path="profile" element={<Dashboard/>}/>
            </Route>
          </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App
