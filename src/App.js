import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NotFoundPage from 'pages/NotFoundPage'
import Home from 'pages/Home'
import LogIn from "pages/LogIn"
import SignUp from "pages/SignUp"
import Dashboard from "pages/Dashboard"
import PageLayout from "PageLayout"
import DashboardCard from 'components/DashboardComponents/DashboardCard'
import DashboardLikeCard from 'components/DashboardComponents/DashboardLikeCard'
  
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<LogIn/>}/>
          <Route path="/signup" element={<SignUp/>}/>
        </Routes>
        <Routes>
          <Route path="profile" element={<Dashboard/>}>
            <Route path="routes" element={<DashboardCard/>} />
            <Route path="likes" element={<DashboardLikeCard/>} />
          </Route>
        </Routes>
          <Routes>
            <Route path="/" element={<PageLayout/>}>
              <Route path="*" element={<NotFoundPage />} />
              <Route index element={<Home />} />
            </Route>
          </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App
