import './App.css'
import FormSearch from './components/FormSearch'
import Movies from './components/Movies'
import {Routes,Route,BrowserRouter} from "react-router-dom"

function App() {
  

  // https://www.omdbapi.com/?apikey=3c327a9b&i=tt0112462

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route/>
        </Routes>
        <FormSearch />
      </BrowserRouter>

      <Movies />
    </div>
  )
}

export default App
