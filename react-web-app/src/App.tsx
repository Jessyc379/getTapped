
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/home/Home'
import Header from './components/shared/header/Header'
import Login from './components/authentication/login/Login'
import Register from './components/authentication/register/Register'
import BreweryPage from './components/breweries/brewery-page/BreweryPage'
import AdminPage from './components/admin/admin-page/AdminPage'
import AdminDashboard from './components/admin/AdminDashboard'




function App() {

  return (
    <Router>
      <Header />

      <main className="container mt-4">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/breweries' element={<BreweryPage />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />

      </Routes>
      </main>


      <footer>
        &copy; getTapped 2024
      </footer>

    </Router>
  )
}

export default App


