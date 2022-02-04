import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NotFoundPage from 'pages/NotFoundPage'
import Home from 'pages/Home'
import RoutePage from 'pages/RoutePage'
import PlacePage from 'pages/PlacePage'
import LogIn from "pages/LogIn"
import SignUp from "pages/SignUp"
import Dashboard from "pages/Dashboard"
import PageLayout from "PageLayout"
import DashboardCardContainer from 'components/DashboardComponents/DashboardCardContainer'
import DashboardLikeCard from 'components/DashboardComponents/DashboardLikeCard'
  
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<LogIn/>}/>
          <Route path="/signup" element={<SignUp/>}/>
          
          {/* <Route path="/profile" element={<Dashboard/>}>
            <Route path="routes" element={<DashboardCardContainer/>} />
            <Route path="likes" element={<DashboardLikeCard/>} />
          </Route> */}
  
          <Route path="/" element={<PageLayout/>}>
            <Route index element={<Home />} />
            <Route path ="route" element={<RoutePage/>}/>
            <Route path="place" element={<PlacePage/>}/>
            <Route path="profile" element={<Dashboard/>}>
              <Route path="routes" element={<DashboardCardContainer/>} />
              <Route path="likes" element={<DashboardLikeCard/>} />
            </Route>
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>         
    </BrowserRouter>
    </div>
  )
}

export default App
