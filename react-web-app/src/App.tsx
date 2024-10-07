
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/home/Home'
import Header from './components/shared/header/Header'
import Login from './components/authentication/login/Login'
import Register from './components/authentication/register/Register'
import BreweryPage from './components/breweries/brewery-page/BreweryPage'
import BreweryList from './components/breweries/brewery-list/BreweryList'
import BreweryDetails from './components/breweries/brewery-details/BreweryDetails'
import BrewerDashboard from './components/brewer/brewer-dashboard/BrewerDashboard'
import BrewerPage from './components/brewer/brewer-page/BrewerPage'


function App() {

  return (
    <Router>
      <Header />

      <main className="container mt-4">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/breweries' element={<BreweryPage />} />
          <Route path='' element={<BreweryList />} />
          <Route path=':breweryId' element={<BreweryDetails />} />          
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/brewers' element={<BrewerPage/>}>
          <Route path='' element={<BrewerDashboard/>}/>


        </Route>

      </Routes>
      </main>

      <footer>
        &copy; getTapped 2024
      </footer>

    </Router>
  )
}

export default App
