import React from 'react'
import ReactDOM from 'react-dom'
import 'index.css'
import App from 'App'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NotFoundPage from './pages/NotFoundPage'
import Home from './pages/Home'
import Footer from './components/Footer'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
      <Routes>
        <Route path="*" element={<NotFoundPage />} />
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />

    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)
