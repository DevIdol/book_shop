import { BrowserRouter } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar'
import Router from './components/Router/Router'
import TopBar from './components/TopBar/TopBar'

function App() {
  return (
    <BrowserRouter>
      <TopBar />
      <NavBar/>
      <Router/>
    </BrowserRouter>
  )
}

export default App
