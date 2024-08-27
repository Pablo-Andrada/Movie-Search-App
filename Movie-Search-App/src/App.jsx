import './App.css'
import FormSearch from './components/FormSearch'

function App() {
  // https://www.omdbapi.com/?apikey=3c327a9b&s=batman

  // https://www.omdbapi.com/?apikey=3c327a9b&i=tt0112462

  return (
    <div className="App">
      <h2>Main component</h2>
      <FormSearch />
    </div>
  )
}

export default App
