
import './App.css';
import imgs from './components/data';
import ExpandCards from './components';

function App() {
  return (
    <div className="App">
    <ExpandCards imgs={imgs}/>
    </div>
  );
}

export default App;
