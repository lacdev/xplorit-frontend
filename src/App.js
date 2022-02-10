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
import OneRoute from 'pages/OneRoute'
import OnePlace from 'pages/OnePlace'
import CreatePlace from 'pages/CreatePlace'
import CreateRoute from 'pages/CreateRoute'
import DashboardComment from 'components/DashboardComponents/DashboardComment'
import DashboardLikeContainer from 'components/DashboardComponents/DeshboardLikeContainer'
import DashboardEdit from 'components/DashboardComponents/DashboardEdit'
import AboutUsPage from 'pages/AboutUs'
  
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<LogIn/>}/>
          <Route path="/signup" element={<SignUp/>}/>

          <Route path="/particularroute" element={<OneRoute/>}/>
          <Route path="/particularplace" element={<OnePlace/>}/>
          <Route path="/about" element={<AboutUsPage/>}/>

          <Route path="/" element={<PageLayout/>}>
            <Route index element={<Home />} />
            <Route path ="route" element={<RoutePage/>}>
          </Route>
            <Route path="place" element={<PlacePage/>}/>
            <Route path="createplace" element={<CreatePlace/>}/>
            <Route path="createroute" element={<CreateRoute/>}/>
            <Route path="profile" element={<Dashboard/>}>
              <Route path="routes" element={<DashboardCardContainer/>} />
              <Route path="places" element={<DashboardCardContainer/>} />
              <Route path="likes" element={<DashboardLikeContainer/>} />
              <Route path="comments" element={<DashboardComment/>}/>
              <Route path="edit" element={<DashboardEdit/>}/>
            </Route>
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>         
    </BrowserRouter>
    </div>
  )
}

export default App
