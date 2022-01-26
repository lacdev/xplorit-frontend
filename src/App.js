
import NavBar from "components/NavBar"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NotFoundPage from 'pages/NotFoundPage'
import Home from 'pages/Home'
import Footer from 'components/Footer'
import RoutePage from 'pages/RoutePage'
  
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path="*" element={<NotFoundPage />} />
        <Route path="/" element={<Home />} />
        <Route path="/RoutePage" element={<RoutePage/>}/>
      </Routes>
      <Footer />

    </BrowserRouter>
    </div>
  )
}

export default App
