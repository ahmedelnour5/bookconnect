import './App.css';
import Header from './Components/Header';
import Landing from './Components/Landing';
import Quote from './Components/Quote';
import Explore from './Components/Explore';

function App() {
  return (
    <div className="App">
      <Landing />
      <Quote />
      <Explore />
    </div>
  );
}

export default App;
