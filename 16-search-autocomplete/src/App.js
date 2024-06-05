
import './App.css';
import SearchAutoComplete from './components';

function App() {
  return (
    <div className="App">
      <SearchAutoComplete url={'http://dummyjson.com/users'}/>
    </div>
  );
}

export default App;
