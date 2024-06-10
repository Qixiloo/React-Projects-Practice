
import './App.css';
import TextUseEffect from './hooks/text';

function App() {
  return (
    <div className="App">
      <TextUseEffect url={"https://dummyjson.com/products?limit=100"} />
    </div>
  );
}

export default App;
