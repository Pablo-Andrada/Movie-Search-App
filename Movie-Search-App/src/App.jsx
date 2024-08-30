import './App.css'
import FormSearch from './components/FormSearch'
import Movies from './components/Movies'

function App() {
  

  // https://www.omdbapi.com/?apikey=3c327a9b&i=tt0112462

  return (
    <div className="App">
      <h2>Main component</h2>
      <FormSearch />
      <Movies />
    </div>
  )
}

export default App
