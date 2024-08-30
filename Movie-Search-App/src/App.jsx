import './App.css'
import FormSearch from './components/FormSearch'
import MainPage from './components/MainPage'
import Movies from './components/Movies'
import {Routes,Route,BrowserRouter} from "react-router-dom"
import SingleMovie from './components/SingleMovie'

function App() {
  

  // https://www.omdbapi.com/?apikey=3c327a9b&i=tt0112462

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<MainPage />} />
          <Route path='/movies/:id' element ={<SingleMovie/>} />          
        </Routes>        
      </BrowserRouter>      
    </div>
  )
}

export default App
