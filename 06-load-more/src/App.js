import logo from './logo.svg';
import './App.css';
import LoadMore from './components';

function App() {
  return (
    <div className="App">
      <LoadMore limit={80}/>
    </div>
  );
}

export default App;
