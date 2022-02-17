import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NotFoundPage from 'pages/NotFoundPage';
import Home from 'pages/Home';
import RoutePage from 'pages/RoutePage';
import PlacePage from 'pages/PlacePage';
import LogIn from 'pages/LogIn';
import SignUp from 'pages/SignUp';
import Dashboard from 'pages/Dashboard';
import PageLayout from 'PageLayout';
import DashboardCardContainer from 'components/DashboardComponents/DashboardCardContainer';
import OneRoute from 'pages/OneRoute';
import OnePlace from 'pages/OnePlace';
import PlaceSearch from 'pages/PlaceSearch';
import RouteSearch from 'pages/RouteSearch';
import CreatePlace from 'pages/CreatePlace';
import CreateRoute from 'pages/CreateRoute';
import DashboardComment from 'components/DashboardComponents/DashboardComment';
import DashboardLikeContainer from 'components/DashboardComponents/DeshboardLikeContainer';
import DashboardEdit from 'components/DashboardComponents/DashboardEdit';
import AboutUsPage from 'pages/AboutUs';
import DashboardPlacesContainer from 'components/DashboardComponents/DashboardPlacesContainer';
import DashboardRoutesContainer from 'components/DashboardComponents/dashboardRoutesContainer';
import LoaderHome from 'components/LandingComponents/LoaderHome';
import { AuthContextProvider } from 'context/AuthContext';

function App() {
  return (
    <AuthContextProvider>
      <div className='App'>
        <BrowserRouter>
          <Routes>
            <Route path='/login' element={<LogIn />} />
            <Route path='/signup' element={<SignUp />} />

           
            <Route path='/searchroute' element={<RouteSearch />} />
            <Route path='/direct' element={<LoaderHome />} />

            <Route path='/' element={<PageLayout />}>
              <Route index element={<Home />} />
              <Route path='routes' element={<RoutePage />}></Route>
              <Route path='places' element={<PlacePage />} />
              <Route path='/searchplace' element={<PlaceSearch />} />
              <Route path='createplace' element={<CreatePlace />} />
              <Route path='createroute' element={<CreateRoute />} />
              <Route path='/route/:id' element={<OneRoute />} />
              <Route path='/place/:id' element={<OnePlace />} />
              <Route path='/about' element={<AboutUsPage />} />
              <Route path='profile' element={<Dashboard />}>
                <Route index element={<DashboardRoutesContainer />} />
                <Route path='routes' element={<DashboardRoutesContainer />} />
                <Route path='places' element={<DashboardPlacesContainer />} />
                <Route path='likes' element={<DashboardLikeContainer />} />
                <Route path='comments' element={<DashboardComment />} />
                {
                  //<Route path="edit" element={<DashboardEdit/>}/>
                }
              </Route>
              <Route path='*' element={<NotFoundPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </AuthContextProvider>
  );
}

export default App;
