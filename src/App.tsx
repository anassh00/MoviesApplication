import './App.css';
import { PopularMovies } from './components/PopularMovies/PopularMovies';
import { LastPopularMovies } from './components/LastPopularMovies/LastPopularMovies';

function App() {
  return (
    <div className="App">
      <LastPopularMovies />
      <br />
      <PopularMovies />
      <br />
    </div>

  );
}

export default App;
