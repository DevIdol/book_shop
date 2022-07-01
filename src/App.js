import { BrowserRouter } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar'
import Router from './components/Router/Router'
import TopBar from './components/TopBar/TopBar'
import CatBar from './components/CatBar/CatBar'

function App() {
  return (
    <BrowserRouter>
      <TopBar />
      <NavBar/>
      <CatBar />
      <Router/>
    </BrowserRouter>
  )
}

export default App
