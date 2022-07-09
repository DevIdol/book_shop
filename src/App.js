import { BrowserRouter } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar'
import Router from './Router/Router'
import CatBar from './components/CatBar/CatBar'

function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <CatBar />
      <Router/>
    </BrowserRouter>
  )
}

export default App
