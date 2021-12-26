import {BrowserRouter} from 'react-router-dom'
import './App.css'
import NavBar from './components/NavBar'

function App() {

  return (
    
    <div className="App">
      <header className="App-header">
        <NavBar sticky="top" />
      </header>
    </div>
    
  )
}

export default App
